/* for nav-link active class */

$(document).ready(function () {
    var url = window.location;

    $('.navbar-nav a').filter(function () {
        return this.href == url;
    }).parent().addClass('active').parent().parent().addClass('active');
});


$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (window.location.pathname == "/home1.html") {
            if (scroll >= 550) {
                header.removeClass('lighthead').addClass("darkHeader");
               
            } else {
                header.removeClass("darkHeader").addClass('lighthead');
               
            }
        }

        else{
            if (scroll >= 150) {
                header.removeClass('lighthead').addClass("darkHeader");
               
            } else {
                header.removeClass("darkHeader").addClass('lighthead');
               
            }
        }
        
        
        
    });
});

$('.gobottom').click(function() {
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top - 70
        }, 0);
        return false;
    }

});