$(document).ready(function(){
    
    /*for sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
  offset: '60px;'
})
   /* scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
     $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    /* Navigation Scroll*/
        
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    /* Animations on Scroll */
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset:'70%'
    })
    
     $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInLeftBig');
    },{
        offset:'70%'
    })
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInRightBig');
    },{
        offset:'70%'
    })
    
     $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeInLeftBig');
    },{
        offset:'70%'
    })
    
        $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animated fadeInRightBig');
    },{
        offset:'70%'
    })
    
    $('.js--wp-6').waypoint(function(direction){
        $('.js--wp-6').addClass('animated fadeInLeftBig');
    },{
        offset:'70%'
    })
    
    $('.js--wp-7').waypoint(function(direction){
        $('.js--wp-7').addClass('animated fadeIn');
    },{
        offset:'70%'
    })
    
    $('.js--wp-8').waypoint(function(direction){
        $('.js--wp-8').addClass('animated fadeIn');
    },{
        offset:'70%'
    })
    
     $('.js--wp-9').waypoint(function(direction){
        $('.js--wp-9').addClass('animated fadeIn');
    },{
        offset:'70%'
    })
    
    $('.js--wp-10').waypoint(function(direction){
        $('.js--wp-10').addClass('animated fadeIn');
    },{
        offset:'70%'
    })
    
    $('.js--wp-11').waypoint(function(direction){
        $('.js--wp-11').addClass('animated fadeIn');
    },{
        offset:'70%'
    })
    
   $('.js--wp-12').waypoint(function(direction){
        $('.js--wp-12').addClass('animated fadeIn');
    },{
        offset:'70%'
    });  
    
    /*Mobile-Navigation*/
$('.js--nav-icon').click(function(){
    var nav =$('.js--main-nav');
    var icon=$('.js--nav-icon i'); 
    nav.slideToggle(200);
    
    if(icon.hasClass('ion-ios-navigate')){
        icon.addClass('ion-ios-close-circle');
        icon.removeClass('ion-ios-navigate')
    }else{
        icon.addClass('ion-ios-navigate');
        icon.removeClass('ion-ios-close-circle');
    }
    
});


    
});

/*Mobile-Navigation*/
$('.js--nav-icon').click(function(){
    var nav =$('.js--main-nav');
    nav.slide;
});


