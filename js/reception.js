var tweets = [];
var authors = [];
var users = [];
var times = [];
var tids = [];
var images = [];
var tids_im = [];
var i=1;
var update = false;
window.setInterval(update_tweets, 20000);
var tweet_ind = [];
var image_ind = [];
var first = true;
var insta_images = [];
var insta_ids = [];
var insta_ind = [];
var insta_tweet = true;
// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false );
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {

//     // Check if the XMLHttpRequest object has a "withCredentials" property.
//     // "withCredentials" only exists on XMLHTTPRequest2 objects.
//     xhr.open(method, url, true);

//   } else if (typeof XDomainRequest != "undefined") {

//     // Otherwise, check if XDomainRequest.
//     // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);

//   } else {

//     // Otherwise, CORS is not supported by the browser.
//     xhr = null;

//   }
//   return xhr;
// }
  

function add_one(array) {
    var x = 0 ;

    // While there remain elements to shuffle...
    while (x<array.length) {

      // Pick a remaining element...
      array[x] = array[x]+1;
      x++;
    }

    return array;
}

function update_insta_images()
{
   var request = $.ajax({
          url: 'https://api.instagram.com/v1/tags/columbiauniversity/media/recent?client_id=c2e5d37274f64185b741e9b39e09afd8',
          type:'GET',
          dataType: "jsonp",
      });

   request.done(function(data){
      data = data.data;
      var x = 0;
      while(x<data.length){
        if(data[x].images != undefined){
          var repeat = false;
          var y = 0;
          while(y<insta_ids.length){
            if(data[x].id == insta_ids[y]){
              repeat = true;
              break;
            }
            y++;
          }
          if(!repeat){
            insta_images.unshift(data[x].images.standard_resolution.url);
            insta_ids.unshift(data[x].id);
            add_one(insta_ind);
            insta_ind.unshift(0);
          }
        }
        x++;
      }
   });
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


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
    update_insta_images();
    
    if(images.length>0 || insta_images.length>0){
      var request = $.ajax({
          url: 'images/backgrounds/' + '%03d'.sprintf(i) + '.jpg',
          type:'HEAD',
      });
      
      request.fail(function(){
          i=1;
      });
      if(images.length){
        if(!image_ind.length){
          var x = 0;
          while(x<images.length){
            image_ind.push(x);
            x++;
          }
          shuffle(image_ind);
        }
      }
      if(insta_images.length){
        if(!insta_ind.length){
          var x = 0;
          while(x<insta_images.length){
            insta_ind.push(x);
            x++;
          }
          shuffle(insta_ind);
        }
      }
      url = insta_tweet ? (insta_images.length ? insta_images[insta_ind.shift()] : images[image_ind.shift()] ) : (images.length ? images[image_ind.shift()] : insta_images[insta_ind.shift()]);
      insta_tweet = !insta_tweet;

      back = [{src: 'images/backgrounds/' + '%03d'.sprintf(i) + '.jpg'},{src: url}];
      $('body').vegas('destroy');
        $('body').vegas({
          animation: 'random',
          transition: 'random',
          transitionDuration: 4000,
          delay:10000,
          cover: true,
          slides: back
        });
      i=i+1;
    }
    else{
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
    }
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
  update_insta_images();
  var x = 0;
  while(x<insta_images.length){
    insta_ind.push(x);
  }
  shuffle(insta_ind);

})

$(document).ready(function() {
    $(".header").css("height",$(window).height());
  
       

    $( window ).resize(function() {
      $(".header").css("height",$(window).height());
        
  });
});

