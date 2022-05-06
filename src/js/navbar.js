let toggle = $("#toggle");
let navMenu = $(".nav-menu")

$(document).ready(function () {
    toggle.click(function () {
        if (navMenu.hasClass('nav-menu-is-active')){
            navMenu.removeClass('nav-menu-is-active');
        }  else {
            navMenu.addClass('nav-menu-is-active').attr('aria-expanded', 'true');
        }   
    });
});