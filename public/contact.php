<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/load-env.php';

define('PHPMailer_PATH', __DIR__ . '/PHPMailer/src/');

define('SMTP_HOST', getenv('SMTP_HOST') ?: 'mail.webhouse.sk');
define('SMTP_PORT', (int) (getenv('SMTP_PORT') ?: 587));
define('SMTP_USER', getenv('SMTP_USER') ?: 'info@odpady24.sk');
define('SMTP_PASS', getenv('SMTP_PASS') ?: '');
define('SMTP_FROM_EMAIL', getenv('SMTP_FROM_EMAIL') ?: 'info@odpady24.sk');
define('SMTP_FROM_NAME', getenv('SMTP_FROM_NAME') ?: 'ODPADY24.sk');
define('EMAIL_TO', getenv('EMAIL_TO') ?: '');

if (!file_exists(PHPMailer_PATH . 'PHPMailer.php')) {
    http_response_code(500);
    echo json_encode([
        'error' => 'PHPMailer library not found',
        'instructions' => 'Please download PHPMailer from https://setup.sk/download/PHPMailer-master.zip and extract the PHPMailer folder to the public/ directory'
    ]);
    exit;
}

require PHPMailer_PATH . 'Exception.php';
require PHPMailer_PATH . 'PHPMailer.php';
require PHPMailer_PATH . 'SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

ob_start();

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        exit;
    }

    $honeypot = isset($_POST['website']) ? trim($_POST['website']) : '';
    $formTime = isset($_POST['form_time']) ? intval($_POST['form_time']) : 0;
    $timestamp = isset($_POST['timestamp']) ? intval($_POST['timestamp']) : 0;

    if (!empty($honeypot)) {
        http_response_code(403);
        echo json_encode(['error' => 'Bot detected']);
        exit;
    }

    if ($formTime > 0 && $formTime < 3000) {
        http_response_code(403);
        echo json_encode(['error' => 'Form submitted too quickly']);
        exit;
    }

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

    $spamPatterns = [
        '/\b(viagra|cialis|casino|poker|loan|mortgage|credit)\b/i',
        '/\b(buy now|click here|limited time)\b/i',
    ];
    foreach ($spamPatterns as $pattern) {
        if (preg_match($pattern, $message) || preg_match($pattern, $name)) {
            http_response_code(403);
            echo json_encode(['error' => 'Spam detected']);
            exit;
        }
    }

    $to = EMAIL_TO;
    $subject = 'Nová správa z kontaktného formulára - ODPADY24.sk';

    // Build email body
    $body = "Meno: $name\n";
    $body .= "Email: $email\n";
    if (!empty($phone)) {
        $body .= "Telefón: $phone\n";
    }
    $body .= "\nSpráva:\n$message";

    ob_clean();

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->SMTPAutoTLS = false;
        $mail->Port = SMTP_PORT;

        // Recipients
        $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
        $mail->addAddress($to);
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->CharSet = 'UTF-8';

        $mail->send();

        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Email sent successfully']);

    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'error' => 'Failed to send email',
            'message' => $mail->ErrorInfo
        ]);
    }

} catch (Exception $e) {
    ob_clean();
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error occurred',
        'message' => $e->getMessage()
    ]);
} catch (Error $e) {
    ob_clean();
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error occurred',
        'message' => $e->getMessage()
    ]);
}

ob_end_flush();
?>