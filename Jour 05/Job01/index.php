<?php
session_start();
if(!isset($_SESSION['email'])){

    echo "<a href='connexion.php'></a>";
    echo "<a href='inscription.php'></a>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <script src="script.js"></script> -->
    <link rel="stylesheet" href="index.css">

    <title>Document</title>
</head>
<body>
    <?php
    if(isset($_SESSION)){
        echo "<p>";
        echo "Bonjour  ".$_SESSION['name'];
        echo "</p>";
    }
    ?>

</body>
</html>