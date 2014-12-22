( function( $ ) {
  
  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $halfSlide = $('.halfSlide');
  $body = $('body');
  
    //FadeIn all sections
    /*   
  $body.imagesLoaded( function() {
    setTimeout(function() {
          
          // Resize sections
          adjustWindow();
          
          // Fade in sections
        $body.removeClass('loading').addClass('loaded');
        
    }, 800);
  });
  */
  
  function adjustWindow(){
    
      // Get window size
      winH = $window.height();
      // Keep minimum height 550
      if(winH <= 550) {
        winH = 550;
      } 
      // Resize our slides
      $slide.height(winH);
      $halfSlide.height(winH*.7);
  }
    
} )( jQuery );