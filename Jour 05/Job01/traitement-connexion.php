<?php
require_once("requete-sql.php");
session_start();

if(isset($_SESSION['login'])){
    header('Location: index.php');
}
$login = file_get_contents('php://input');
var_dump($_POST);

    if(!empty($_POST['email']) && !empty($_POST['password'])){

        $email = htmlspecialchars($_POST['email']);
        $password = htmlspecialchars($_POST['password']);
        $user =findAllInfoUser($email);

        if(password_verify($password, $user['0']['password'])){

            session_start();
            $_SESSION['email'] = $user['0']['email'];
            $_SESSION['name'] = $user['0']['nom'];
            $_SESSION['userId'] = $user['0']['id'];
            echo '<script>document.location.href = "index.php"</script>';
        }
        else {
            $error = "Email ou mot de passe incorrect.";
        }
    }



?>