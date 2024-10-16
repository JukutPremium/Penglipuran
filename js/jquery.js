$(document).ready(function() {
    $(window).on('scroll', function() {
        const scrollValue = $(this).scrollTop();
        const navbar = $(".navbar");

        if (scrollValue >= 250) {
            navbar.addClass("scrolled");
        } else {
            navbar.removeClass("scrolled");
        }
    });
});
    