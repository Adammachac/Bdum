<?php
// Vypnutí zobrazení chyb na stránce (v produkci)
error_reporting(0);
ini_set('display_errors', 0);

// Kontrola, zda byl formulář odeslán metodou POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ošetření vstupních dat
    $name = htmlspecialchars(trim($_POST["name"]));
    $contact = filter_var(trim($_POST["contact"]), FILTER_SANITIZE_EMAIL); // Sanitace e-mailu
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validace e-mailu
    if (!filter_var($contact, FILTER_VALIDATE_EMAIL)) {
        echo "Neplatná e-mailová adresa.";
        exit;
    }

    // Nastavení e-mailové adresy příjemce
    $to = "adammachac18@seznam.cz";

    // Předmět e-mailu
    $email_subject = "Nový dotaz: " . ucfirst($subject);

    // Tělo e-mailu
    $email_body = "Jméno: $name\n";
    $email_body .= "Kontakt: $contact\n";
    $email_body .= "Předmět: $subject\n";
    $email_body .= "Zpráva:\n$message\n";

    // Hlavičky e-mailu
    $headers = "From: no-reply@tvojweb.cz\r\n"; // Změň na vlastní e-mail
    $headers .= "Reply-To: $contact\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Odeslání e-mailu
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Děkujeme! Váš dotaz byl úspěšně odeslán.";
    } else {
        echo "Omlouváme se, ale e-mail se nepodařilo odeslat.";
        error_log("E-mail nelze odeslat na adresu $to", 0); // Zapisuje chybu do logu
    }
} else {
    echo "Neplatná žádost.";
}
?>
