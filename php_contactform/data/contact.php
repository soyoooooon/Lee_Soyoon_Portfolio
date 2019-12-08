<?php


if(empty($_POST['name'])  ||
   empty($_POST['number']) ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    echo "\n Error: All fields are required";
    exit;
}


$name = '';
$email = '';
$number='';
$message = '';
$recipient = 's_lee77176@fanshaweonline.ca';

if(isset($_POST['name'])){
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['number'])){
    $number =  filter_var($_POST['number'],FILTER_SANITIZE_NUMBER_FLOAT);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r","\n","%0a","%0d"),'',$_POST['email']);
    $email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['message'])){
    $message= $_POST['message'];
}

$headers = array(
    'From'=>'noreply@test.ca',
    'Reply-To'=>$name.'<'.$email.'>'
);

if(mail($recipient, $subject, $message, $headers)){
    echo '<p>Thankyou for the contact, '.$name.'</p>';
}else{
    echo'<p>we are sorry but the email is not correct</p>';
}
