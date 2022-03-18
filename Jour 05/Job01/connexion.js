document.addEventListener('DOMContentLoaded', (event) => {

    let p = document.querySelectorAll('p')
    let email = document.getElementById('email')
    var password = document.getElementById('password')
    var connexion = document.getElementById('connexion')

    let regexLowerCase = /[a-z]{1,}/
    let regexUpperCase = /[A-Z]{1,}/
    let regexNumber = /[0-9]{1,}/
    let ValidMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexSpeChar = /^[^@&"()!_$*€£`+=\/;?#]+$/


    password.addEventListener('keyup', function() {
        if (this.value.length < 8) {
            p[1].style.color = 'red'
        } else {
            p[1].style.color = 'green'
        }

        if (regexUpperCase.test(this.value) == false) {
            p[2].style.color = 'red'
        } else {
            p[2].style.color = 'green'
        }

        if (regexLowerCase.test(this.value) == false) {
            p[3].style.color = 'red'
        } else {
            p[3].style.color = 'green'
        }

        if (regexNumber.test(this.value) == false) {
            p[4].style.color = 'red'
        } else {
            p[4].style.color = 'green'
        }
    })

    email.addEventListener('focusout', function() {
        if (ValidMail.test(this.value) == false) {
            p[0].textContent = 'Format Email incorrect'
            p[0].style.color = 'red'
        } else {
            console.log(email.value)
        }
    })

    connexion.addEventListener('click', function() {
        let fd = new FormData();

        fd.append("email", email.value)
        fd.append("password", password.value)
        fetch('traitement-connexion.php', { method: "POST", body: fd })
            .then(response => response.text())
            .then(data => console.log(data));
    })
})