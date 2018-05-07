





$('body').append('<div class="loader"><p><img src="images/nback/loader.gif"></p></div>');
debugger;
$(window).on('load', function(){
	
       setTimeout(removeLoader, 1000);
});

function removeLoader(){
	
	$('.loader').fadeOut(1000, function(){
		$('.loader').remove();
	});
}


$(document).ready(function() {
    var jvalidate = $(".form1").validate({
                ignore: [],
                rules: {                                            
                        gentil_name: {
                                required: true,
                              
                        },
                        gentil_email:{
                           required: true,
                           
                        },
                        gentil_phone:{
                           required: true,
                           
                        },
                        gentil_message:{
                           required: true,
                           
                        },
                      }
     });
});




$(function() {
  var loc = window.location.href; // returns the full URL
  if(/index.php/.test(loc)) {
    $('#nav').addClass('active');
  }
});

$(function() {
  var loc = window.location.href; // returns the full URL
  if(/about-us.php/.test(loc)) {
    $('#nav1').addClass('active');
  }
});

$(function() {
  var loc = window.location.href; // returns the full URL
  if(/our-products.php/.test(loc)) {
    $('#nav2').addClass('active');
  }
});
$(function() {
  var loc = window.location.href; // returns the full URL
  if(/technology.php/.test(loc)) {
    $('#nav3').addClass('active');
  }
});

$(function(){
   var loc = window.location.href;
   if(/quality.php/. test(loc)){
       $('#nav4').addClass('active');
   }
});

$(function(){
   var loc = window.location.href;
   if(/contact-us.php/. test(loc)){
       $('#nav5').addClass('active');
   }
   console.log(loc);
});


/*
switch (window.location.pathname) {
    case '/index.php':
        $('#nav').addClass('active')
    case '/about-us.php':
          $('#nav1').addClass('active')
    case '/our-products.php':
        $('#nav2').addClass('active')
    case '/technology.php':
        $('#nav3').addClass('active')
    case '/quality.php':
        $('#nav4').addClass('active')
     case '/contact-us.php':
        $('#nav5').addClass('active')          
       
}
*/











$(document).ready(function() { 
 $(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
    $('header').addClass('shrink', 1000);
  } else {
    $('header').removeClass('shrink', 1000);
  }
});
});




$(function (){
  $('.nav li a[href^="/' +location.pathname.split("/")[1] + '"]').addClass('active')
  console.log('.nav li a[href^="/' +location.pathname.split("/")[1] + '"]')
});

(function() {
    var nav = document.getElementById('nav'),
        anchor = nav.getElementsByTagName('a'),
        current = window.location.pathname.split('/')[1];
        for (var i = 0; i < anchor.length; i++) {
        if(anchor[i].href == current) {
            anchor[i].className = "active";
        }
    }
})();



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