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

$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 600) {
            header.removeClass('lighthead').addClass("darkHeader");
           
        } else {
            header.removeClass("darkHeader").addClass('lighthead');
           
        }
        
        
    });
});