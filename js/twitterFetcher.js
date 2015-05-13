/*********************************************************************
*  #### Twitter Post Fetcher v13.0 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals.
    factory();
  }
}(this, function() {
  var domNode = '';
  var maxTweets = 20;
  var parseLinks = true;
  var queue = [];
  var inProgress = false;
  var printTime = true;
  var printUser = true;
  var formatterFunction = null;
  var supportsClassName = true;
  var showRts = true;
  var customCallbackFunction = null;
  var showInteractionLinks = true;
  var showImages = false;
  var targetBlank = true;
  var lang = 'en';
  var permalinks = true;

  function getElementsByClassName (node, classname) {
    var a = [];
    var regex = new RegExp('(^| )' + classname + '( |$)');
    var elems = node.getElementsByTagName('*');
    for (var i = 0, j = elems.length; i < j; i++) {
        if(regex.test(elems[i].className)){
          a.push(elems[i]);
        }
    }
    return a;
  }

  function handleTweets(tweets, authors, times,i){
    if (customCallbackFunction === null) {
      var x = tweets.length;
      var n = 0;
      var prof = document.getElementById('profile-div');
      var us = document.getElementById('user');
      var tw = document.getElementById('tweet');
      var tp = document.getElementById('timePosted');
      
         // html += '<li>' + tweets[n] + '</li>';
        s = authors[i].getElementsByClassName("u-photo avatar")[0].getAttribute("src");
        s = s.replace("_normal","")       
        prof.innerHTML = '<img class="profile-pic" src="' + s + '">';
        us.innerHTML = authors[i].innerText;
        tw.innerHTML = tweets[i].innerText;
        tp.innerHTML = times[i].innerText ;
        
     
      // var html = '<ul>';
      // while(n < x) {
      //   html += '<li>' + tweets[n] + '</li>';
      //   n++;
      // }
      // html += '</ul>';
      // element.innerHTML = html;
    } else {
      customCallbackFunction(tweets);
    }
  }

  function strip(data) {
    return data.replace(/<b[^>]*>(.*?)<\/b>/gi, function(a,s){return s;})
        .replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,
        '');
  }

  function targetLinksToNewWindow(el) {
    var links = el.getElementsByTagName('a');
    for (var i = links.length - 1; i >= 0; i--) {
      links[i].setAttribute('target', '_blank');
    }
  }

  

  function extractImageUrl(image_data) {
    if (image_data !== undefined) {
      var data_src = image_data.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];
      return decodeURIComponent(data_src).split('"')[1];
    }
  }

  var twitterFetcher = {
    fetch: function(config) {
      if (config.maxTweets === undefined) {
        config.maxTweets = 20;
      }
      if (config.enableLinks === undefined) {
        config.enableLinks = true;
      }
      if (config.showUser === undefined) {
        config.showUser = true;
      }
      if (config.showTime === undefined) {
        config.showTime = true;
      }
      if (config.dateFunction === undefined) {
        config.dateFunction = 'default';
      }
      if (config.showRetweet === undefined) {
        config.showRetweet = true;
      }
      if (config.customCallback === undefined) {
        config.customCallback = null;
      }
      if (config.showInteraction === undefined) {
        config.showInteraction = true;
      }
      if (config.showImages === undefined) {
        config.showImages = false;
      }
      if (config.linksInNewWindow === undefined) {
        config.linksInNewWindow = true;
      }
      if (config.showPermalinks === undefined) {
        config.showPermalinks = true;
      }
      if (config.update == undefined){
        config.update = false;
      }

      if (inProgress) {
        queue.push(config);
      } else {
        inProgress = true;

        domNode = config.domId;
        maxTweets = config.maxTweets;
        parseLinks = config.enableLinks;
        printUser = config.showUser;
        printTime = config.showTime;
        showRts = config.showRetweet;
        formatterFunction = config.dateFunction;
        customCallbackFunction = config.customCallback;
        showInteractionLinks = config.showInteraction;
        showImages = config.showImages;
        targetBlank = config.linksInNewWindow;
        permalinks = config.showPermalinks;
        update = config.update;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'http://cdn.syndication.twimg.com/widgets/timelines/' +
            config.id + '?&lang=' + (config.lang || lang) + '&callback=twitterFetcher.callback&' +
            'suppress_response_codes=true&rnd=' + Math.random();
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    },
    callback: function(data) {
      var div = document.createElement('div');
      div.innerHTML = data.body;
      

      if(update & tweets.length>0){
        var x=0;
        var tmp = getElementsByClassName(div, 'tweet');
        var y =0;
        while(x<tmp.length){
          if(tmp[x].getAttribute('data-tweet-id') != tids[y])
          {
            tweets.unshift(getElementsByClassName(tmp[x], 'e-entry-title')[0]);
            
            authors.unshift(getElementsByClassName(tmp[x], 'p-author')[0]);
            times.unshift(getElementsByClassName(tmp[x], 'dt-updated')[0]);
            tids.unshift(tmp[x].getAttribute('data-tweet-id'));
            x++;
            y+=1;
            handleTweets(tweets,authors,times,0);
          }
          else{

            handleTweets(tweets,authors,times,Math.floor((Math.random() * tweets.length)));
            break;
          }
        }
        
      }
      else{
      var x = 0;
        var tmp = getElementsByClassName(div, 'tweet');
        while (x < tmp.length) {
          tweets.push(getElementsByClassName(tmp[x], 'e-entry-title')[0]);
          
          authors.push(getElementsByClassName(tmp[x], 'p-author')[0]);
          times.push(getElementsByClassName(tmp[x], 'dt-updated')[0]);
          tids.push(tmp[x].getAttribute('data-tweet-id'));
          x++;
        }
      

      if (tweets.length > maxTweets) {
        tweets.splice(maxTweets, (tweets.length - maxTweets));
        authors.splice(maxTweets, (authors.length - maxTweets));
        times.splice(maxTweets, (times.length - maxTweets));
        tids.splice(maxTweets, (tids.length - maxTweets));
      }
      handleTweets(tweets,authors,times,0);
    }

      
      inProgress = false;

      if (queue.length > 0) {
        twitterFetcher.fetch(queue[0]);
        queue.splice(0,1);
      }
    }
  };

  // It must be a global variable because it will be called by JSONP.
  window.twitterFetcher = twitterFetcher;

  return twitterFetcher;
}));
