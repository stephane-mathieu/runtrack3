document.addEventListener('DOMContentLoaded', (event) => {

    var pos = document.getElementById('footer');

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    window.addEventListener('scroll', function() {
        var progress = (document.documentElement.scrollTop / height) * 100;

        console.log(progress);
        pos.style.width = progress + "%";

        if (progress <= 35) {
            pos.style.background = "linear-gradient(blue, white)";
        } else if (progress > 35 && progress <= 70) {
            pos.style.background = "linear-gradient(red, white)";
        } else if (progress > 70 && progress <= 100) {
            pos.style.background = "linear-gradient(green, white)";
        }
    })
})