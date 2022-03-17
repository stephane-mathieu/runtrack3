document.addEventListener("DOMContentLoaded", (event) => {
    const url = 'pokemon.json';

    let selected = document.getElementById("select")

    let typelist = [];

    fetch(url)
        .then(response => response.json())
        .then(response => {
            for (var i = 0; i < response.length; i++) {
                let sans_doublons = response[i].type;

                typelist.push(sans_doublons.toString());

            }
            let filteredArray = typelist.filter(function(ele, pos) {
                return typelist.indexOf(ele) == pos;
            })

            for (var i = 0; i < filteredArray.length; i++) {
                let option = document.createElement("option");
                option.innerHTML = filteredArray[i]
                selected.append(option);
            }



        });
})