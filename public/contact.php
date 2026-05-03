<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once __DIR__ . '/load-env.php';

/** Prefer $_ENV (set by load-env.php); getenv() can miss putenv() under some PHP-FPM setups. */
function contactEnv(string $key, string $default = ''): string {
    if (array_key_exists($key, $_ENV)) {
        return (string) $_ENV[$key];
    }
    $v = getenv($key);
    return $v !== false ? (string) $v : $default;
}

define('PHPMailer_PATH', __DIR__ . '/PHPMailer/src/');

define('SMTP_HOST', contactEnv('SMTP_HOST', 'mail.webhouse.sk'));
define('SMTP_PORT', (int) contactEnv('SMTP_PORT', '587'));
define('SMTP_USER', contactEnv('SMTP_USER', 'info@odpady24.sk'));
define('SMTP_PASS', contactEnv('SMTP_PASS', ''));
define('SMTP_FROM_EMAIL', contactEnv('SMTP_FROM_EMAIL', 'info@odpady24.sk'));
define('SMTP_FROM_NAME', contactEnv('SMTP_FROM_NAME', 'ODPADY24.sk'));
define('EMAIL_TO', contactEnv('EMAIL_TO', ''));
/**
 * tls = predvolené STARTTLS na 587 (Thunderbird/Outlook na WebHouse); AUTH často zlyhá bez TLS aj pri správnom hesle.
 * webhouse = SMTPSecure false + SMTPAutoTLS false ako v starom PHP príklade na helpdesku (len ak viete, že to váš server vyžaduje).
 * ssl | smtps = port 465; none = bez šifrovania
 * @see https://helpdesk.webhouse.sk/116974-PHP-trieda-PHPMailer-na-odosielanie-e-mailov-s-SMTP-autorizáciou
 */
define('SMTP_SECURE', strtolower(trim(contactEnv('SMTP_SECURE', 'tls'))));
define('SMTP_HELO', trim(contactEnv('SMTP_HELO', '')));
define('SMTP_DEBUG', (int) contactEnv('SMTP_DEBUG', '0'));
/** auto | login | plain — predvolené login (auto môže zvoliť CRAM-MD5, ktorý na niektorých serveroch zlyhá) */
define('SMTP_AUTH', strtolower(trim(contactEnv('SMTP_AUTH', 'login'))));
/** Odosielateľ = SMTP_USER; nastavte SMTP_USE_USER_AS_FROM=0 ak chcete výhradne SMTP_FROM_EMAIL */
define('SMTP_USE_USER_AS_FROM', contactEnv('SMTP_USE_USER_AS_FROM', '1') !== '0');

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

    $to = EMAIL_TO !== '' ? EMAIL_TO : SMTP_USER;
    $subject = 'Nová správa z kontaktného formulára - ODPADY24.sk';

    if (SMTP_PASS === '') {
        ob_clean();
        http_response_code(500);
        echo json_encode([
            'error' => 'SMTP nie je nakonfigurované',
            'hint' => 'V .env musí byť nastavené SMTP_PASS (heslo poštovej schránky, nie alias bez schránky).',
        ]);
        exit;
    }

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
        $auth = SMTP_AUTH;
        if ($auth === 'plain') {
            $mail->AuthType = 'PLAIN';
        } elseif ($auth === 'login') {
            $mail->AuthType = 'LOGIN';
        } else {
            $mail->AuthType = '';
        }
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->Port = SMTP_PORT;

        $sec = SMTP_SECURE;
        if ($sec === 'ssl' || $sec === 'smtps') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        } elseif ($sec === 'tls' || $sec === 'starttls') {
            // Alternatíva podľa návodov pre Outlook/Thunderbird (STARTTLS na 587)
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->SMTPAutoTLS = true;
        } elseif ($sec === 'none' || $sec === 'off' || $sec === 'false') {
            $mail->SMTPSecure = false;
            $mail->SMTPAutoTLS = false;
        } else {
            // webhouse (predvolené) — zhoda s oficiálnym príkladom WebHouse v dokumentácii PHPMailer
            $mail->SMTPSecure = false;
            $mail->SMTPAutoTLS = false;
        }

        $helo = SMTP_HELO;
        if ($helo === '' && preg_match('/@([^@]+)$/', SMTP_USER, $mh)) {
            $helo = $mh[1];
        }
        if ($helo !== '') {
            $mail->Helo = $helo;
        }

        if (SMTP_DEBUG > 0) {
            $mail->SMTPDebug = min(3, SMTP_DEBUG);
            $mail->Debugoutput = static function ($str, $level) {
                error_log('[odpady24 contact SMTP] ' . trim($str));
            };
        }

        // Recipients (niektoré SMTP vyžadujú zhodu From s prihláseným účtom)
        $fromAddr = SMTP_USE_USER_AS_FROM ? SMTP_USER : SMTP_FROM_EMAIL;
        $mail->setFrom($fromAddr, SMTP_FROM_NAME);
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
        $info = $mail->ErrorInfo;
        $payload = [
            'error' => 'Failed to send email',
            'message' => $info,
        ];
        if (stripos($info, 'authenticate') !== false) {
            $payload['hint'] = 'Overte schránku a heslo (nie alias). Skúste SMTP_AUTH=plain alebo SMTP_USE_USER_AS_FROM=1. Ak server vyžaduje TLS pred AUTH, nastavte SMTP_SECURE=tls. Heslo so špeciálnymi znakmi dajte do úvodzoviek v .env. SMTP_DEBUG=2 → error log.';
        }
        if (stripos($info, 'STARTTLS') !== false || stripos($info, 'Must issue') !== false) {
            $prev = $payload['hint'] ?? '';
            $payload['hint'] = trim($prev . ' Skúste SMTP_SECURE=tls (STARTTLS na porte 587).');
        }
        echo json_encode($payload);
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