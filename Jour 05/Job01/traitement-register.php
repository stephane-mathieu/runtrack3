
<?php
require_once("requete-sql.php");
session_start();

if(isset($_SESSION['login'])){
    header('Location: index.php');
}

$login = file_get_contents('php://input');

// var_dump($login);
var_dump($_POST);



    @$firstname = htmlspecialchars($_POST['prenom']);
    @$lastname = htmlspecialchars($_POST['nom']);
    @$email = htmlspecialchars($_POST['email']);
    @$password = htmlspecialchars($_POST['password']);
    @$checkemail = finInfoUser($email);
    @$password_confirm = htmlspecialchars($_POST['ConfPassword']);

    $check = true;

    if(empty($email)){
        $check = false;
        $error_email = "Renseignez une adresse email.";
        $email = "";
        // echo "mail vide"."<br>";
    }

    elseif(filter_var($email, FILTER_VALIDATE_EMAIL) == false) {
        $valid=false;
        $error_email = "Votre email n'est pas au bon format : example@gmail.";
        $email="";
        // echo "Votre email n'est pas au bon format"."<br>";
    }
    if(count($checkemail) != 0){
        $check = false;
        $error_email = "Cet email est déjà utilisé.";
        $email = "";
        // echo "erreur mail utilisé"."<br>";
    }


    if($password != $password_confirm){
        $check = false;
        $error_password_confirm = "Les mots de passe ne correspondent pas.";
        $password = '';
        $password_confirm ='';
        // echo "error confirm password"."<br>";
    }

    if(empty($password)){
        $check = false;
        $error_password = "Renseignez votre mot de passe.";
        $password = '';
        // echo "error password vide"."<br>";
    }elseif( strlen($password) < 8 ) {
        $check = false;
        $error_password = "Le mot de passe doit être au moins de 8 caractères.";
        $password = '';
        // echo "Le mot de passe doit être au moins de 10 caractères"."<br>";
    }elseif(!preg_match('/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]/',$password)) {
        $error_password = "Le mot de passe ne respecte pas les conditions.";
        $check = false;
        $password='';
        // echo "Le mot de passe ne respecte pas les conditions"."<br>";

    }

    if(empty($lastname)){
        $check = false;
        $error_password = "Renseignez votre lastname.";
        $password = '';
        // echo "error lastname vide"."<br>";
    }

    if(empty($firstname)){
        $check = false;
        $error_password = "Renseignez votre firstname.";
        $password = '';
        // echo "error firstname vide";
       
    }

    if($check == true){
        $password = password_hash($password, PASSWORD_BCRYPT);
        InsertUser($firstname,$lastname,$email,$password);
        header('location: connexion.php');
    }

?>