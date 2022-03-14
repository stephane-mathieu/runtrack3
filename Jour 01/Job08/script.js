let nbr1 = 1
let nbr2 = 2



function sommenombrespremiers(nbr, nbr2) {
    for (var i = 2; i < nbr; i++) {
        if (nbr % i === 0) {

            return false;
        }
        return nbr > 1;
    }

    for (var i = 2; i < nbr2; i++) {
        if (nbr % i === 0) {

            return false;
        }
        return nbr2 > 1;
    }

    var resultat = nbr + nbr2

    return resultat

}

console.log(sommenombrespremiers(2, 2));