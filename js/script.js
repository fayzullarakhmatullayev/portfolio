    new WOW().init();   
   
    // Toggle nav
    
    $('.header-toggle').click(function (){
        $('.nav-menu, .header-toggle').toggleClass('active');
    })
    
    var intro = $('.intro');
    var header = $('header');
    var navLinks = $('.nav-menu__link');
    var onOff = true;
    
    
    navLinks.click(function(e) {
      e.preventDefault();
      navHeight = header.outerHeight();
      var href = $(this).attr('href');
      var target = $(href).offset().top - navHeight;
      $('html').animate({
        scrollTop: target + 20
      },800)
    });

    
    $(window).scroll(function(){
      var scrolled = $(this).scrollTop();
      
      navLinks.each(function(){
        if(scrolled >= $($(this).attr('href')).offset().top - header.outerHeight()){
          navLinks.removeClass('nav-menu__link_active');
          $(this).addClass('nav-menu__link_active');
        }
      })
      
      if(scrolled >= intro.outerHeight() - header.outerHeight() && onOff == true){
        header.addClass('fixed-top').css('opacity' , 0).animate({
          opacity: 1
        }, 1000)
        onOff = false;
      } else if(scrolled < intro.outerHeight() - header.outerHeight() && onOff == false){
        header.animate({
          opacity: 0
        }, 1000, function(){
          $(this).removeClass('fixed-top').css('opacity', 1)
        });
        onOff = true;
      }
      if(scrolled > 400){
        $('.arrow-up').fadeIn(1000);
      }else {
        $('.arrow-up').fadeOut(1000);
      }
    });
    
    $('.logo ,.arrow-up').click(function(){
      $('html').animate({
        scrollTop: 0
      }, 1000)
    });
    
    
    $('form').submit(function(e){
      $('.form-control').each(function(){
          if(!$(this).val()){
              $(this).addClass('error');
              e.preventDefault();
          }
      });  
    });

    

  




