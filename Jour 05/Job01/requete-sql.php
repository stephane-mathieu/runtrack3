<?php


function findAllInfoUser($email): array{
    $user = 'root'; 
    $pass = '';

try{
    $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs',$user,$pass);

}
catch(PDOException $e){
    echo "Erreur :" . $e->getMessage(). "<br>";
    die();
}

    //select les infos de lutilisateur choisis
    $query = $pdo->prepare("SELECT * FROM `utilisateurs` WHERE `email` = '$email'");
    $query->setFetchMode(\PDO::FETCH_ASSOC);
    $query->execute();
    $user=$query->fetchall();

    return $user;
}

function finInfoUser($email){
    $user = 'root'; 
    $pass = '';
// $user = 'root';
// $pass = '';

try{
    $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs',$user,$pass);

}
catch(PDOException $e){
    echo "Erreur :" . $e->getMessage(). "<br>";
    die();
}

    //select les infos de lutilisateur choisis
    $query = $pdo->prepare("SELECT email FROM `utilisateurs` WHERE `email` = '$email'");
    $query->setFetchMode(\PDO::FETCH_ASSOC);
    $query->execute();
    $user=$query->fetchall();

    return $user;
}

function InsertUser($firstname,$lastname,$email,$password){
    $user = 'root'; 
$pass = '';
// $user = 'root';
// $pass = '';

try{
    $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs',$user,$pass);

}
catch(PDOException $e){
    echo "Erreur :" . $e->getMessage(). "<br>";
    die();
}

    $data = [
        'firstname1' =>$firstname,
        'lastname' =>$lastname,
        'email' =>$email,
        'password' =>$password,
    ];

    $query = "INSERT INTO utilisateurs (`nom`, `prenom`, `email`, `password`) VALUES (:firstname1,:lastname,:email,:password)";
    $insert_user = $pdo->prepare($query);
    $insert_user->execute($data);
}

?>