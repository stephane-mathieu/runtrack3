document.addEventListener("DOMContentLoaded", (event) => {

    const url = 'text.json';


    function jsonValueKey(test) {
        var keyapp = test;

        // var name = test
        // console.log(name)
        fetch(url)
            .then(response => response.json())
            .then(response => {

                Object.keys(response).forEach(function(key) {
                    if (key == keyapp) {
                        return console.log(response[key])
                    }
                })
            });
    }

    jsonValueKey("city")


})