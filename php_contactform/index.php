<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/contact.css?v=<?php echo time(); ?>">
    <title>PHP Contact Form</title>
</head>
<body>
<section class=form>
<form action="data/contact.php" method="post">
    <label for="name" class="nme">First Name</label>
    <input id="name" type="text" name="name" placeholder="First Name">
    <!--First Name-->
    <label for="phone" class="phn">Phone Number</label>
    <input id="number" type="number" name="number" placeholder="Phone Number">
    <!-- Phone Number-->
    <label for="email">E-mail</label>
    <input id="email" type="mail" name="email" placeholder="Email">
    <!--Email-->
    <label for="message">Message</label>
    <input id="message" type="text" name="message" placeholder="Message">
    <!-- <textarea></textarea> -->

    <button type="submit">Submit</button>
   </section> 
</body>
</html>