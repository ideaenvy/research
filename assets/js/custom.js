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
  /* for accordation icon change */
$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function() {
            $(this)
                .parent()
                .find(".fa-plus")
                .removeClass("fa-plus")
                .addClass("fa-minus");
        })
        .on('hidden.bs.collapse', function() {
            $(this)
                .parent()
                .find(".fa-minus")
                .removeClass("fa-minus")
                .addClass("fa-plus");
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

$(document).ready(function(){
    
   
    $('.homeone .owl-carousel').owlCarousel({
    dots: true,
    loop:true,
    margin: 10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        }
    }
    });
});