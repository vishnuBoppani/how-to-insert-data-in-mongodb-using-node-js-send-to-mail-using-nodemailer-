
$(document).ready(function () {
  // $("#head-srch").hide();
   $("#srch").click(function () {
       $("#head-srch").show();
   });
   $("#close").click(function () {
       $("#head-srch").hide();
   });
});

///home slider code

  $('.slideshow').each( function() {
      var $slideshow = $(this);
      $slideshow.imagesLoaded( function() {
        $slideshow.skidder({
          slideClass    : '.slide',
          animationType : 'css',
          scaleSlides   : true,
          maxWidth : 1300,
          maxHeight: 500,
          paging        : true,
          autoPaging    : true,
          pagingWrapper : ".skidder-pager",
          pagingElement : ".skidder-pager-dot",
          swiping       : true,
          leftaligned   : false,
          cycle         : true,
          jumpback      : false,
          speed         : 400,
          autoplay      : true,
          autoplayResume: true,
          interval      : 2000,
          transition    : "slide",
          afterSliding  : function() {},
          afterInit     : function() {}
        });
      });
    });

    // $('.slideshow-nocycle').each( function() {
    //   var $slideshow = $(this);
    //   $slideshow.imagesLoaded( function() {
    //     $slideshow.skidder({
    //       slideClass    : '.slide',
    //       scaleSlides   : true,
    //       maxWidth : 1300,
    //       maxHeight: 500,
    //       leftaligned   : true,
    //       cycle         : false,
    //       paging        : true,
    //       swiping       : true,
    //       jumpback      : false,
    //       speed         : 400,
    //       autoplay      : false,
    //       interval      : 4000,
    //       afterSliding  : function() {}
    //     });
    //   });
    // });

    $(window).smartresize(function(){
      $('.slideshow').skidder('resize');
    });