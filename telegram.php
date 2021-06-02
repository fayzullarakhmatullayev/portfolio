<?php

/* https://api.telegram.org/bot1777752990:AAFuICwt-aQUCwTiCMZs6iaeyG4-dFTTi3k/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */
$txt = "";
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$message = $_POST['user_message'];

$token = "1777752990:AAFuICwt-aQUCwTiCMZs6iaeyG4-dFTTi3k";
$chat_id = "-500987779";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email: ' => $email,
  'Сообшения: ' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

header('Location: index.html');
?>