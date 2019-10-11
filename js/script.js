(function($) {          
    $(document).ready(function(){    
        $(".navbar").hide();                
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 650) {
                $('.navbar').fadeIn(700);
            } else {
                $('.navbar').fadeOut(0);
            }
        });
    });
})(jQuery);

$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})