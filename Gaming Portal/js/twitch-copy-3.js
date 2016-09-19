$(document).ready(function(){
    var streamer = ["n4n0teh", "nl_kripp", "reckful"];
    var url = "https://api.twitch.tv/kraken/streams/null";
    var activeStreamer = "";
    var streamerLength = streamer.length;
    var i = 0;


    $.getJSON(url,function(data1){

            for (var i = 0; i < streamerLength; i++){
                var url = "https://api.twitch.tv/kraken/streams/" + streamer[i];
                activeStreamer = streamer[i];
                }
                $.getJSON(url,function(data1){
                if(data1.stream != null){
                streamerDetails();
                }
                });
        
    });

    function streamerDetails(){
        $("#fccStatus").html("Sythe's Featured Streamer: " + activeStreamer);
        $("#featuredStatus").html('<a href="https://www.twitch.tv/' + activeStreamer + '?tt_medium=live_embed&tt_content=text_link" style="padding: 2px 0px 4px; width: 400px; font-size: 10px; color: white; font-weight: normal; text-decoration: underline; display: block;">Watch Live on www.twitch.tv/</a>');
        $("#streamerName").html('<iframe style="width: 780px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + activeStreamer + '/embed"></iframe>');
        $("#streamerChat").html('<iframe style="width: 400px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + activeStreamer + '/chat?popout="></iframe>');
    }
});





