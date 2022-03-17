document.addEventListener('DOMContentLoaded', (event) => {

    let btn = document.getElementById('filter')
    let reset = document.getElementById('reset')
    let select = document.querySelector('select')
    let ul = document.querySelector('ul')
    let li = document.querySelector('li')
    var body = document.querySelector('body')
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

                let type = document.querySelector('option').innerHTML
                let li = document.querySelector('li')
                let choice = select.selectedIndex;
                let valeur = select.options[choice].value;
                let text = select.options[choice].text;
                var newul = document.createElement('ul')
                var ul = document.querySelector('ul')

                for (let i = 0; i < response.length; i++) {
                    if (text == response[i].type) {
                        body.append(newul)
                        let NewLi = document.createElement('li')
                        NewLi.innerHTML = response[i].id + ' ' + response[i].name.french + ' ' + response[i].type
                        newul.append(NewLi)
                    }
                }
            })
            reset.addEventListener("click", function() {
                let ul = document.querySelector('ul')
                ul.remove()
            })
        })
        .catch((error) => console.log(error))

})