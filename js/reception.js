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
      cover: false,
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

