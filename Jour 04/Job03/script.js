"use strict ";
document.addEventListener('DOMContentLoaded', (event) => {

    let btn = document.getElementById('filter')
    let select = document.querySelector('select')
    let ul = document.querySelector('ul')
    let li = document.querySelector('li')
    let allLi = document.querySelectorAll('li')
    let typeList = []


    fetch('pokemon.json')
        .then((response) => response.json())
        .then((response) => {

            /*display option select*/
            for (let i = 0; i < response.length; i++) {
                let typePokemon = response[i].type
                typeList.push(typePokemon.toString())
            }

            /*Retirer les doublons*/
            let newList = typeList.filter(function(ele, pos) {
                return typeList.indexOf(ele) == pos;
            })

            /* Display Select no doublons */
            for (let i = 0; i < newList.length; i++) {
                let NewOpt = document.createElement('option')
                NewOpt.innerHTML = newList[i]
                select.append(NewOpt)
            }

            btn.addEventListener("click", function() {
                let type = document.querySelector('option')
                let choice = select.selectedIndex;
                let valeur = select.options[choice].value;
                let texte = select.options[choice].text;
                console.log(texte)
                for (let i = 0; i < response.length; i++) {
                    if (texte == response[i].type) {
                        console.log(select)
                        console.log(response[i].type)
                        let NewLi = document.createElement('li')
                        NewLi.innerHTML = response[i].id + ' ' + response[i].name.french + ' ' + response[i].type
                        ul.append(NewLi)
                        if (ul) {
                            ul.remove()
                        }
                    } else if (type == '-Selectionner un type-') {
                        console.log(type)
                        console.log('pas de type')
                        let NewLi = document.createElement('li')
                        NewLi.innerHTML = response[i].id + ' ' + response[i].name.french + ' ' + response[i].type
                        ul.append(NewLi)
                    }

                }
            })
        })
        .catch((error) => console.log(error))

})