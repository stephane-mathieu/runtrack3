$(document).ready(function() {

    $('p').hide();
    $("#button1").click(function() {
        $('p').show();
    });

    $("#button2").click(function() {
        $('html').hide();
    });
})