document.addEventListener('DOMContentLoaded', (event) => {

    let btn = document.getElementById("button");
    let text = document.getElementById("text");

    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");


    btn.addEventListener("click", function() {

        let arrayTxt = ["Dommage qu'elle doive mourir, mais c'est notre lot à tous.", "T'endors pas, c'est l'heure de mourir demain", "J'ai vu tant de choses que vous, humains, ne pourriez pas croire. ...", " Le commerce est notre seul but chez Tyrell. ..."]

        const random = Math.floor(Math.random() * arrayTxt.length);
        text.innerHTML = arrayTxt[random]
        console.log(text);
    })

    text1.addEventListener("click", function() {
        text.innerHTML = "Dommage qu'elle doive mourir, mais c'est notre lot à tous";
        console.log(text)
    })

    text2.addEventListener("click", function() {
        text.innerHTML = " Quelle expérience de vivre dans la peur !";
        console.log(text)
    })

    text3.addEventListener("click", function() {
        text.innerHTML = "J'ai vu tant de choses que vous, humains, ne pourriez pas croire. ...";
        console.log(text)
    })



})