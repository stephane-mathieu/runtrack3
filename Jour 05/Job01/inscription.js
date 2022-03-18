document.addEventListener('DOMContentLoaded', (event) => {

    let p = document.querySelectorAll('p')
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let ConfPassword = document.getElementById('ConfPassword')
    let register = document.querySelector('button')

    let regexLowerCase = /[a-z]{1,}/
    let regexUpperCase = /[A-Z]{1,}/
    let regexNumber = /[0-9]{1,}/
    let ValidMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexSpeCharac = /^[^@&".()!_$*€£`+=\/;?#]+$/
    let regexListNum = /^[0-9]*$/

    firstname.addEventListener('focusout', function() {
        if (regexSpeCharac.test(this.value) == false) {
            p[0].textContent = 'Pas de caractère Spéciaux'
            p[0].style.color = 'red'
            firstname.style.color = 'red'
            firstname.style.borderColor = 'red'
        } else if (regexListNum.test(this.value) == true) {
            p[0].textContent = 'Pas de Chiffre'
            p[0].style.color = 'red'
            firstname.style.color = 'red'
            firstname.style.borderColor = 'red'
        } else {
            p[0].textContent = ''
            firstname.style.color = 'black'
        }
    })

    lastname.addEventListener('focusout', function() {
        if (regexSpeCharac.test(this.value) == false) {
            p[1].textContent = 'Pas de caractère Spéciaux'
            p[1].style.color = 'red'
            lastname.style.color = 'red'
            lastname.style.borderColor = 'red'
        } else if (regexListNum.test(this.value) == true) {
            p[1].textContent = 'Pas de Chiffre'
            p[1].style.color = 'red'
            lastname.style.color = 'red'
            lastname.style.borderColor = 'red'
        } else {
            p[1].textContent = ''
            lastname.style.color = 'black'
        }
    })

    email.addEventListener('focusout', function() {
        if (ValidMail.test(this.value) == false) {
            p[2].textContent = 'Email incorrect'
            p[2].style.color = 'red'
            email.style.color = 'red'
            email.style.borderColor = 'red'
        } else {
            p[2].textContent = 'Email Valide'
            p[2].style.color = 'green'
            email.style.color = 'black'
        }
    })

    password.addEventListener('keyup', function() {
        if (this.value.length === 0) {
            p[3].textContent = 'Remplir le champ !!'
            p[3].style.color = 'red'
        } else {
            p[3].textContent = 'Minimum 8 charateres'
            p[3].style.color = 'red'
        }
        if (this.value.length < 8) {
            p[3].style.color = 'red'
        } else {
            p[3].style.color = 'green'
        }

        if (regexUpperCase.test(this.value) == false) {
            p[4].style.color = 'red'
        } else {
            p[4].style.color = 'green'
        }

        if (regexLowerCase.test(this.value) == false) {
            p[5].style.color = 'red'
        } else {
            p[5].style.color = 'green'
        }

        if (regexNumber.test(this.value) == false) {
            p[6].style.color = 'red'
        } else {
            p[6].style.color = 'green'
        }

    })


    ConfPassword.addEventListener('focusout', function matchPassword() {
        if (this.value.length === 0) {
            p[7].textContent = 'Remplir le champ !!'
            p[7].style.color = 'red'
            ConfPassword.style.borderColor = 'red'
        } else {
            p[7].textContent = ''
            p[7].style.color = 'red'
            if (password.value != ConfPassword.value) {
                p[7].textContent = 'Mot de passe différent'
                p[7].style.color = 'red'
                ConfPassword.style.color = 'red'
                ConfPassword.style.borderColor = 'red'
            } else {
                p[7].textContent = 'Mot de passe Valide'
                p[7].style.color = 'green'
                ConfPassword.style.color = 'black'
            }
        }
    })

    register.addEventListener('click', function() {

        console.log(firstname.value)
        console.log(lastname.value)
        console.log(email.value)
        console.log(password.value)
        console.log(ConfPassword.value)

        fetch('traitement-register')

    })
})