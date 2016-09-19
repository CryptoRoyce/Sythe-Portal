//Scraper to change streamer list from another website.
    function streamerScrape(){
        request('http://www.reddit.com', function(err, resp, body){
            if(!err && resp.statusCode == 200){
                var $ = cheerio.load(body);
                $('a.title', '#siteTable').each(function(){
                    var url = $(this).attr('href');
                    urls.push(url);
                });
                $("#scrapeInfo").html(urls);
            }
        });
    }
    streamerScrape();



$(document).ready(function(){


    var streamer = ["imaqtpie", "nl_kripp", "eclypsiatvlol"];   //Change this line to modify priority list. Add or remove Twitch usernames. 
    var url = "https://api.twitch.tv/kraken/streams/null";
    var activeStreamer = "";

    var streamerLength = streamer.length;
    var i = 0;


//The JS scraper requires request and cheerio.
    var request = require('request'),
        cheerio = require('cheerio'),
        urls = [];



//Relays information to be displayed in the playSythe.html file.
    function streamerDetails(){
        $("#fccStatus").html("Sythe's Featured Streamer: " + activeStreamer);
        $("#featuredStatus").html('<a href="https://www.twitch.tv/' + activeStreamer + '?tt_medium=live_embed&tt_content=text_link" style="padding: 2px 0px 4px; width: 400px; font-size: 10px; color: white; font-weight: normal; text-decoration: underline; display: block;">Watch Live on www.twitch.tv/</a>');
        $("#streamerName").html('<iframe style="width: 780px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + activeStreamer + '/embed"></iframe>');
        $("#streamerChat").html('<iframe style="width: 400px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + activeStreamer + '/chat?popout="></iframe>');
    }

//Checks to find an active streamer before displaying the playSythe.html information which is based around a streamer found online. 
    function getStreamer(i) {
      if (i < streamerLength) {
        var url = "https://api.twitch.tv/kraken/streams/" + streamer[i];
        $.getJSON(url, function(data1) {
          if (data1.stream === null) {
            i++;
            getStreamer(i);
          } else if (data1.stream != null) {
            activeStreamer = streamer[i];
            streamerDetails();
          }
        });
      } else {
        console.log("Not found.");
      }
    }
    getStreamer(i);



});

