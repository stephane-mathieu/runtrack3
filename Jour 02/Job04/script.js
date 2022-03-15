document.addEventListener("DOMContentLoaded", (e) => {

    let textarea = document.getElementById("keylogger");


    function addCharacter(event) {
        textarea.value = textarea.value + event.key;
    }

    document.addEventListener("keypress", addCharacter);

})