/* for nav-link active class */

$(document).ready(function () {
    var url = window.location;

    $('.navbar-nav a').filter(function () {
        return this.href == url;
    }).parent().addClass('active').parent().parent().addClass('active');
});



/* $(function() {
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

  
    


}); */
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
    
   
    $(".gallery.owl-carousel").owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        slideSpeed: 1000,
        autoPlay: true,
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
      });
});

