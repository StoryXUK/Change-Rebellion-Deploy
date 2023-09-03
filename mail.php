
<?php

// ==================================================
// uniMail - v.1.0.1
// Universal PHP Mail Feedback Script
// More info: https://github.com/agragregra/uniMail
// ==================================================

$method = $_SERVER['REQUEST_METHOD'];

// Initialize variables
$project_name = "Change Rebellion";
$admin_email  = "mark.green@changerebellion.com"; // Replace with the desired email address
$form_subject = "Contact Form Submission";

$message = ""; // Initialize the message content

// Check if the form was submitted using POST method
if ($method === 'POST') {
	foreach ($_POST as $key => $value) {
		if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
			$message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f3f3f3;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid; width: 100px;'><strong>$key:</strong></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
		";
		}
	}
} elseif ($method === 'GET') {
	foreach ($_GET as $key => $value) {
		if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
			$message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f3f3f3;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid; width: 100px;'><strong>$key:</strong></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
		";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	'From: ' . adopt($project_name) . ' <' . $admin_email . '>' . PHP_EOL .
	'Reply-To: ' . $admin_email . '' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);
?>
