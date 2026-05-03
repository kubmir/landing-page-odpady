<?php
/**
 * Simple .env file loader for PHP
 * Reads .env file and sets $_ENV and $_SERVER (and putenv() when the host allows it).
 *
 * Values from the file always win for keys defined in the file. Hosting stacks often
 * predefine SMTP_* (sometimes empty) in $_SERVER/$_ENV; skipping those would leave
 * SMTP_PASS empty and break PHPMailer authentication.
 */
/**
 * Decodes double-quoted .env values (\\, \", \n, \r, \t, \$).
 */
function decodeEnvDoubleQuoted(string $inner): string {
    return preg_replace_callback('/\\\\(\\\\|"|n|r|t|\$)/', static function (array $m): string {
        switch ($m[1]) {
            case 'n':
                return "\n";
            case 'r':
                return "\r";
            case 't':
                return "\t";
            default:
                return $m[1];
        }
    }, $inner);
}

function loadEnv($envPath) {
    if (!file_exists($envPath)) {
        return false;
    }

    $raw = file_get_contents($envPath);
    if ($raw === false) {
        return false;
    }
    // Strip UTF-8 BOM so the first key is not "\xEF\xBB\xBFSMTP_PASS"
    if (strncmp($raw, "\xEF\xBB\xBF", 3) === 0) {
        $raw = substr($raw, 3);
    }

    $lines = preg_split("/\r\n|\n|\r/", $raw);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '') {
            continue;
        }
        // Skip full-line comments
        if ($line[0] === '#') {
            continue;
        }

        if (strpos($line, '=') === false) {
            continue;
        }

        list($key, $value) = explode('=', $line, 2);
        $key = trim($key, " \t\x0B\x0C");
        if ($key === '') {
            continue;
        }

        $value = rtrim($value, "\r\n");
        $value = trim($value);
        if ($value !== '' && strlen($value) >= 2) {
            $q0 = $value[0];
            $q1 = substr($value, -1);
            if ($q0 === '"' && $q1 === '"') {
                $value = decodeEnvDoubleQuoted(substr($value, 1, -1));
            } elseif ($q0 === "'" && $q1 === "'") {
                $value = substr($value, 1, -1);
            }
        }

        $_ENV[$key] = $value;
        $_SERVER[$key] = $value;
        if (function_exists('putenv')) {
            putenv($key . '=' . $value);
        }
    }

    return true;
}

$envFile = __DIR__ . '/.env';
loadEnv($envFile);
