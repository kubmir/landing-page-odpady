<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Bot protection checks
$honeypot = isset($_POST['website']) ? trim($_POST['website']) : '';
$formTime = isset($_POST['form_time']) ? intval($_POST['form_time']) : 0;
$timestamp = isset($_POST['timestamp']) ? intval($_POST['timestamp']) : 0;

// Check honeypot field (should be empty - if filled, it's a bot)
if (!empty($honeypot)) {
    http_response_code(403);
    echo json_encode(['error' => 'Bot detected']);
    exit;
}

// Check if form was filled too quickly (less than 3 seconds is suspicious)
if ($formTime > 0 && $formTime < 3000) {
    http_response_code(403);
    echo json_encode(['error' => 'Form submitted too quickly']);
    exit;
}

// Check if timestamp is too old (more than 1 hour) or too new (negative)
if ($timestamp > 0) {
    $currentTime = time() * 1000; // Convert to milliseconds
    $timeDiff = abs($currentTime - $timestamp);
    if ($timeDiff > 3600000) { // More than 1 hour
        http_response_code(403);
        echo json_encode(['error' => 'Invalid timestamp']);
        exit;
    }
}

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Additional bot detection: check for common spam patterns
$spamPatterns = [
    '/\b(viagra|cialis|casino|poker|loan|mortgage|credit)\b/i',
    '/\b(http|https|www\.)/i',
    '/\b(buy now|click here|limited time)\b/i',
];
foreach ($spamPatterns as $pattern) {
    if (preg_match($pattern, $message) || preg_match($pattern, $name)) {
        http_response_code(403);
        echo json_encode(['error' => 'Spam detected']);
        exit;
    }
}

$to = 'info@odpady24.sk';
$subject = 'Nová správa z kontaktného formulára - ODPADY24.sk';
$body = "Meno: $name\n";
$body .= "Email: $email\n";
if (!empty($phone)) {
    $body .= "Telefón: $phone\n";
}
$body .= "\nSpráva:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>

