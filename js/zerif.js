var tweets = [];
var authors = [];
var users = [];
var times = [];
var tids = [];
var i=1;
var update = false;
window.setInterval(update_tweets, 20000);

function update_tweets() { var config1 = {
  "id": '598293690700955648',
  "domId": 'tw-widget1',
  "maxTweets": 1,
  "enableLinks": false,
  "showUser": true,
  "showTime": true,
  "showRetweet": false,
  "showInteraction": false,
  "showImages": true,
  "update": true
};
twitterFetcher.fetch(config1);

$.ajax({
    url: 'images/backgrounds/' + '%04d'.sprintf(i) + '.jpg',
    type:'HEAD',
    error: function()
    {
        i=1;
    },
    success: function()
    {
        //file exists
    }
});
back = [{src: 'images/backgrounds/' + '%03d'.sprintf(i) + '.jpg',fade:1000}];
$.vegas('slideshow', {
  delay:20000,
  backgrounds: back
});
i=i+1;
// if(i>4){i=1;}
update = true;
in_animation();
setTimeout( out_animation, 15000);
}

function out_animation(){
  if(update){
  $('#profile-div').animo( { animation: 'flipOutY', duration: 5 } );
$('#user').animo( { animation: 'bounceOutUp', duration: 5 } );
$('#tweet').animo( { animation: 'flipOutX', duration: 5 , keep:false} );
$('#timePosted').animo( { animation: 'bounceOutDown', duration: 5} );
update = false;
}
}

function in_animation(){

  $('#profile-div').animo( { animation: 'flipInX', duration: 5 } );
$('#user').animo( { animation: 'bounceInDown', duration: 8 } );
$('#tweet').animo( { animation: 'bounceInRight', duration: 8 } );
$('#timePosted').animo( { animation: 'bounceInUp', duration: 10} );

}
/* ================================
===  BACKGROUND SLIDER        ====
================================= */

      
   
/* =================================
   LOADER                     
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
  var config1 = {
  "id": '598293690700955648',
  "domId": 'tw-widget1',
  "maxTweets": 20,
  "enableLinks": false,
  "showUser": true,
  "showTime": true,
  "showRetweet": false,
  "showInteraction": false,
  "showImages": true,
  "update": false
};
twitterFetcher.fetch(config1);
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
  update_tweets();
})

$(document).ready(function() {
    $(".header").css("height",$(window).height());
  
       

    $( window ).resize(function() {
      $(".header").css("height",$(window).height());
        
  });
});


// /* =================================
// ===  Bootstrap Fix              ====
// =================================== */
// if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
//   var msViewportStyle = document.createElement('style')
//   msViewportStyle.appendChild(
//     document.createTextNode(
//       '@-ms-viewport{width:auto!important}'
//     )
//   )
//   document.querySelector('head').appendChild(msViewportStyle)
// }

// /* =================================
// ===  STICKY NAV                 ====
// =================================== */

// $(document).ready(function() {
  
  
//        $('.navbar-collapse').click('li', function() {
//           $('.navbar-collapse').collapse('hide');
//       });
//   // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/         
//   var top = $('#main-nav').offset().top - parseFloat($('#main-nav').css('margin-top').replace(/auto/, 0));
//         $('#sitename').affix({
//           offset: { top: $('#sitename').offset().top }
//         });
//         $('#main-nav').affix({
//           offset: { top: $('#main-nav').offset().top}
//         });
//         if (document.documentElement.clientWidth > 768) {
          
//           $(".sec").css("min-height",$(window).height() - $('#sitename').height() + 20 +"px");
//           $(".header").css("height",$(window).height());
//           $('.main-nav-list').onePageNav({
//     scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
//     scrollOffset: $('#sitename').height() //Height of Navigation Bar
//   });
//           /*$( ".anchor" ).css( "top", "-" + $('#main-nav').height() + "px");*/
//       }
//       else{
//         $(".header").css("height",$(window).height());
//         $.fx.off = true;
//         $(".item").css("height",document.documentElement.clientWidth + "px");
//         $('.main-nav-list').onePageNav({
//     scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
//     scrollOffset: $('#main-nav').height() //Height of Navigation Bar
//   });
//       }

//     $( window ).resize(function() {
//         if (document.documentElement.clientWidth > 768) {
//                 $(".sec").css("min-height",$(window).height() - $('#sitename').height() + 20 +"px");
//                 $(".header").css("height",$(window).height());
//                 $('.main-nav-list').onePageNav({
//                       scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
//                       scrollOffset: $('#sitename').height() //Height of Navigation Bar
//                     });
//                 $.fx.off = false;
//                 $(".item").css("height",260 + "px");
//         }
//         else{
//           $(".header").css("height",$(window).height());
//           $.fx.off = true;
//           $(".item").css("height",0.8*document.documentElement.clientWidth + "px");
//           $('.main-nav-list').onePageNav({
//             scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
//             scrollOffset: $('#main-nav').height() //Height of Navigation Bar
//           });
//         }
//   });
// });


// /*=================================
// ===  OWL CROUSEL               ====
// ===================================*/
//    $(document).ready(function() {
//   var owl = $("#client-feedbacks");
//   owl.owlCarousel({
//       items : 3, //10 items above 1000px browser width
//       itemsDesktop : [1000,2], //5 items between 1000px and 901px
//       itemsDesktopSmall : [900,1], // betweem 900px and 601px
//       itemsTablet: [600,1], //2 items between 600 and 0
//       itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
//   });
// });


// =================================
// ===  SMOOTH SCROLL             ====
// =================================== 
// var scrollAnimationTime = 1200,
//         scrollAnimation = 'easeInOutExpo';
//     $('a.scrollto').bind('click.smoothscroll',function (event) {
//         event.preventDefault();
//         var target = this.hash;
//         $('html, body').stop().animate({
//             'scrollTop': $(target).offset().top
//         }, scrollAnimationTime, scrollAnimation, function () {
//             window.location.hash = target;
//         });
//     });   




// /* ================================
// ===  PROJECT LOADING           ====
// ================================= */

// jQuery(document).ready(function($) {
//     $('.more').on('click', function(event) {
//         event.preventDefault();

//         var href = $(this).attr('href') + ' .single-project',
//             portfolioList = $('#portfolio-list'),
//             content = $('#loaded-content');

//         portfolioList.animate({'marginLeft':'-120%'},{duration:400,queue:false});
//         portfolioList.fadeOut(400);
//         setTimeout(function(){ $('#loader').show(); },400);
//         setTimeout(function(){
//             content.load(href, function() {
//                 $('#loaded-content meta').remove();
//                 $('#loader').hide();
//                 content.fadeIn(600);
//                 $('#back-button').fadeIn(600);
//             });
//         },800);

//     });

//     $('#back-button').on('click', function(event) {
//         event.preventDefault();

//         var portfolioList = $('#portfolio-list')
//             content = $('#loaded-content');

//         content.fadeOut(400);
//         $('#back-button').fadeOut(400);
//         setTimeout(function(){
//             portfolioList.animate({'marginLeft':'0'},{duration:400,queue:false});
//             portfolioList.fadeIn(600);
//         },800);
//     });
// });

// /* ================================
// ===  PARALLAX                  ====
// ================================= */
// $(document).ready(function(){
//   var $window = $(window);
//   $('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){
//     var $bgobj = $(this);
//     $(window).scroll(function() {
//       var yPos = -($window.scrollTop() / $bgobj.data('speed'));
//       var coords = '50% '+ yPos + 'px';
//       $bgobj.css({ 
//         backgroundPosition: coords 
//       });
//     });
//   });
// });

// /* ================================
// ===  KNOB                      ====
// ================================= */
// $(function() {
// $(".skill1").knob({
//                 'max':100,
//                 'width': 64,
//                 'readOnly':true,
//                 'inputColor':' #FFFFFF ',
//                 'bgColor':' #222222 ',
//                 'fgColor':' #e96656 '
//                 });
// $(".skill2").knob({
//                 'max':100,
//                 'width': 64,
//                 'readOnly':true,
//                 'inputColor':' #FFFFFF ',
//                 'bgColor':' #222222 ',
//                 'fgColor':' #34d293 '
//                 });
//   $(".skill3").knob({
//                 'max': 100,
//                 'width': 64,
//                 'readOnly': true,
//                 'inputColor':' #FFFFFF ',
//                 'bgColor':' #222222 ',
//                 'fgColor':' #3ab0e2 '
//                 });
//   $(".skill4").knob({
//                 'max': 100,
//                 'width': 64,
//                 'readOnly': true,
//                 'inputColor':' #FFFFFF ',
//                 'bgColor':' #222222 ',
//                 'fgColor':' #E7AC44 '
//                 });
// });



// /* =================================
// ===  WOW ANIMATION             ====
// =================================== */

// new WOW().init();



