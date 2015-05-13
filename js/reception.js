var tweets = [];
var authors = [];
var users = [];
var times = [];
var tids = [];
var i=1;
var update = false;
window.setInterval(update_tweets, 20000);
var tweet_ind = [];
var first = true;

function callback(wh,slide){
  if(wh.width<wh.height){
    slide.css('background-size','contain') ;
  }
}

(function ($) {
// for better performance, define regexes once, before the code
var pxRegex = /px/, percentRegex = /%/, urlRegex = /url\(['"]*(.*?)['"]*\)/g;
$.fn.getBackgroundSize = function (callback) {
  var img = new Image(), width, height, backgroundSize = this.css('background-size').split(' ');
  var slide = this;
  if (pxRegex.test(backgroundSize[0])) width = parseInt(backgroundSize[0]);
  if (percentRegex.test(backgroundSize[0])) width = this.parent().width() * (parseInt(backgroundSize[0]) / 100);
  if (pxRegex.test(backgroundSize[1])) height = parseInt(backgroundSize[1]);
  if (percentRegex.test(backgroundSize[1])) height = this.parent().height() * (parseInt(backgroundSize[0]) / 100);
  // additional performance boost, if width and height was set just call the callback and return
  if ((typeof width != 'undefined') && (typeof height != 'undefined')) {
    callback({ width: width, height: height },slide);
    return this;
  }
  img.onload = function () {
    if (typeof width == 'undefined') width = this.width;
    if (typeof height == 'undefined') height = this.height;
    callback({ width: width, height: height },slide);
  }
  img.src = this.css('background-image').replace(urlRegex, '$1');
  return this;
}
})(jQuery);


function update_tweets() { 
  if(first)
  {
    first=false;
    back = [{src: 'images/backgrounds/' + '%03d'.sprintf(i) + '.jpg'},{src: 'images/backgrounds/' + '%03d'.sprintf(i+1) + '.jpg'}];

    $('body').vegas({
      animation: 'random',
      transition: 'random',
      transitionDuration: 4000,
      delay:10000,
      cover: true,
      slides: back
    });
    i=i+2;
    in_animation();
    setTimeout( out_animation, 15000);
  }
  else
  {
    var config1 = {
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

    var request = $.ajax({
        url: 'images/backgrounds/' + '%03d'.sprintf(i+1) + '.jpg',
        type:'HEAD',
    });
    
    request.fail(function(){
        i=1;
    });
    back = [{src: 'images/backgrounds/' + '%03d'.sprintf(i) + '.jpg'},{src: 'images/backgrounds/' + '%03d'.sprintf(i+1) + '.jpg'}];
   $('body').vegas('destroy');
    $('body').vegas({
      animation: 'random',
      transition: 'random',
      transitionDuration: 4000,
      delay:10000,
      cover: true,
      slides: back
    });
    i=i+2;
    // if(i>4){i=1;}
    update = true;
    in_animation();
    setTimeout( out_animation, 15000);
  }
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


jQuery(window).load(function() {

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

