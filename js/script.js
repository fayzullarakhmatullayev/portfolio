    new WOW().init();   
    // Effect typing 
    const typedTextSpan = document.querySelector(".typed-text")
  , cursorSpan = document.querySelector(".cursor")
  , textArray = ["сложно", "забавно", "путешествия", "ЖИЗНЬ"]
  , typingDelay = 200
  , erasingDelay = 100
  , newTextDelay = 2e3;
    let i = 0
  , charIndex = 0;
    function type() {
        charIndex < textArray[i].length ? (cursorSpan.classList.contains("typing") || cursorSpan.classList.add("typing"),
        typedTextSpan.textContent += textArray[i].charAt(charIndex),
        charIndex++,
        setTimeout(type, typingDelay)) : (cursorSpan.classList.remove("typing"),
        setTimeout(erase, newTextDelay))
    }
    function erase() {
        charIndex > 0 ? (cursorSpan.classList.contains("typing") || cursorSpan.classList.add("typing"),
        typedTextSpan.textContent = textArray[i].substring(0, charIndex - 1),
        charIndex--,
        setTimeout(erase, erasingDelay)) : (cursorSpan.classList.remove("typing"),
        ++i >= textArray.length && (i = 0),
        setTimeout(type, typingDelay + 1100))
    }
    document.addEventListener("DOMContentLoaded", function() {
        textArray.length && setTimeout(type, newTextDelay + 250)
    });

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
    $('.form-control').on('input', function(){
      $(this).removeClass('error'); 
    });
    

  




