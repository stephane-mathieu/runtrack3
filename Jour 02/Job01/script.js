document.addEventListener("DOMContentLoaded", (e) => {
    let button = document.getElementById("button");

    let article = document.getElementById("citation").textContent

    function citation(event) {

        console.log(article);
    }

    button.addEventListener("click", citation);

})