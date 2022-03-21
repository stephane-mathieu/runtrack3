
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type='text/javascript' src='inscription.js'></script>
    <link rel="stylesheet" href="index.css">
    <title>Inscription</title>
</head>
<body>

    <label for="firstname">Nom</label>
    <input id ='firstname' name="firstname" type="text" placeholder="Nom">
    <p></p>

    <label for="lastname">Prenom</label>
    <input id ='lastname' name="lastname" type="text" placeholder="Prenom">
    <p></p>

    <label for="email">Email</label>
    <input id ='email' name="email" type="email" placeholder="Email" autocomplete="off">
    <p></p>

    <label for="password">Mot de passe</label>
    <input id ='password' name="password" type="password" placeholder="Mot de passe">
    <p>Minimum 8 charateres</p>
    <p>Lettre majuscule</p>
    <p>Lettre minuscule</p>
    <p>Chiffre</p>

    <label for="ConfPassword">Confirmer Mot de passe</label>
    <input id ='ConfPassword' name="ConfPassword" type="password" placeholder="Confirmation Mot de passe">
    <p></p>

    <button id='inscription' type ='submit'> Inscription </button>

</body>
</html>