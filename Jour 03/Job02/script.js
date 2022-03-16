$(document).ready(() => {
    $('#button').click(melange);
})

function melange() {

    let randomTable = getRandomTable(); //renvoie un tableau avec des index aleatoire

    $("#melangees").empty(); //on vide la balise qui a lid melangees
    $("#rangees").empty(); //on vide la balise qui a lid rangees

    randomTable.forEach(i => { //parcoure et affiche les image aleatoirement grace a la fonction getrandomtable
        $(`<img id='arc${i}' src='  arc${i}.png'>`).appendTo("#melangees");
        $(`#arc${i}`).click(function(event) { //quand on clic sur limage on la deplace et verif en meme temps la victoire
            togglediv(this); //fait les deplacement des images dans lautre div
            checkVictory(); //function pour la victoire
        })
    });
}

function togglediv(element) { //permet de  changer de place les div 
    if (element.parentNode.id == 'melangees') {
        $(element).appendTo('#rangees');
    } else {
        $(element).appendTo('#melangees');
    }
}

function getRandomTable() { //permet de genererer lindex aleatoirement
    let randomTable = []; //on cree notre tableau
    while (randomTable.length < 6) {
        let rdNumber = Math.trunc(Math.random() * 7); //donne un nombre aleatoire et larrondi au centieme pres
        if (!randomTable.includes(rdNumber) && rdNumber > 0) { //verif si le tableau na pas de valeur
            randomTable.push(rdNumber); //ajoute des element dans le tableau
        }
    }
    return randomTable;
}

function checkVictory() {
    let imgNodeList = document.querySelector('#rangees').childNodes;
    $('#msg').remove();
    if (imgNodeList.length == 6) {
        let counter = 1;
        imgNodeList.forEach(element => {
            if (element.id.replace('arc', '') == counter) {
                counter++
            }
        });
        if (counter == 7) {
            $('<h1 id="msg">Vous avez gagné</h1>').appendTo("body");
        } else {
            $('<h1 id="msg">Vous avez perdu</h1>').appendTo("body");
        }
    }
}