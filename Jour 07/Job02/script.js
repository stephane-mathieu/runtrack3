document.addEventListener('DOMContentLoaded', (event) => {

    let btn = document.getElementById("button");
    let text = document.getElementById("text");

    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");

    btn.addEventListener("click", function() {
        text.innerHTML = "T'endors pas, c'est l'heure de mourir";
        console.log(text)
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



    var obj = [
        { number: "Number 1" },
        { number: "Number 2" },
        { number: "Number 3" },
        { number: "Number 4" },
        { number: "Number 5" },
        { number: "Number 6" },
        { number: "Number 7" },
        { number: "Number 8" },
        { number: "Number 9" },
        { number: "Number 10" },
        { number: "Number 11" },
        { number: "Number 12" },
        { number: "Number 13" },
        { number: "Number 14" },
        { number: "Number 15" }
    ];
    var current_page = 1;
    var obj_per_page = 3;

    function totNumPages() {
        return Math.ceil(obj.length / obj_per_page);
    }

    function prevPage() {
        if (current_page > 1) {
            current_page--;
            change(current_page);
        }
    }

    function nextPage() {
        if (current_page < totNumPages()) {
            current_page++;
            change(current_page);
        }
    }


    btn_next.addEventListener("click", function() {
        change(2)
    })


    function change(page) {
        var btn_next = document.getElementById("btn_next");
        var btn_prev = document.getElementById("btn_prev");
        var listing_table = document.getElementById("TableList");
        // var page_span = document.getElementById("page");
        if (page < 1) page = 1;
        if (page > totNumPages()) page = totNumPages();
        listing_table.innerHTML = "";
        for (var i = (page - 1) * obj_per_page; i < (page * obj_per_page); i++) {
            listing_table.innerHTML += obj[i].number + "<br>";
        }
        text.innerHTML = page;
        if (page == 1) {
            btn_prev.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
        }
        if (page == totNumPages()) {
            btn_next.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
        }
    }


})