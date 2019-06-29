$(document).ready(function() {
    $(".header, .about, .equipment, .works, .footer")
        .on("click", "a", function(event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('html, body').animate({ scrollTop: top }, 750);
        });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 750) {
            $('#scroller').fadeIn("fast");
        } else {
            $('#scroller').fadeOut("fast");
        }
    });
    $('#scroller').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 750, 'swing');
        return false;
    });

    $(".header, .logo, .btn-primary, .menu, .menu_sm, .lang_switch").removeClass("default");
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $(".header, .logo, .btn-primary, .menu, .menu_sm, .lang_switch").addClass("default").fadeIn('slow');
        } else {
            $(".header, .logo, .btn-primary, .menu, .menu_sm, .lang_switch").removeClass("default").fadeIn('slow');
        }
    });
});

function show(id) {
    document.getElementById(id).style.visibility = "visible";
}
function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
}