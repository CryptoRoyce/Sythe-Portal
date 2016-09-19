//RUN JQEURY
$(document).ready(function(){
    //Get the stream information via API

    var featuredStreamer = "n4n0teh";
    var url = "https://api.twitch.tv/kraken/streams/n4n0teh";


    $.getJSON(url,function(data1){

        if(featuredStreamer == "n4n0teh" && data1.stream != null){
                $("#streamer").html('<iframe style="width: 780px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + featuredStreamer + '/embed"></iframe>');
                $("#streamerChat").html('<iframe style="width: 400px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + featuredStreamer + '/chat?popout="></iframe>');
        }

        if(data1.stream === null){
                var url = "https://api.twitch.tv/kraken/streams/voyboy";
                var featuredStreamer = "voyboy";
                $("#fccStatus").html("Sythe's Featured Streamer: " + featuredStreamer);
                $("#featuredStatus").html('<a href="https://www.twitch.tv/' + featuredStreamer + '?tt_medium=live_embed&tt_content=text_link" style="padding: 2px 0px 4px; width: 400px; font-size: 10px; color: white; font-weight: normal; text-decoration: underline; display: block;">Watch Live on www.twitch.tv/</a>');
                $("#streamer").html('<iframe style="width: 780px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + featuredStreamer + '/embed"></iframe>');
                $("#streamerChat").html('<iframe style="width: 400px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + featuredStreamer + '/chat?popout="></iframe>');
        }

        if((data1.stream === null) && (featuredStreamer == "n4n0teh")){
            var url = "https://api.twitch.tv/kraken/streams/ritysayo";
            var featuredStreamer = "ritysayo"
            $("#fccStatus").html("Sythe's Featured Streamer: " + featuredStreamer);
            $("#featuredStatus").html("<a href='https://www.twitch.tv/" + featuredStreamer + "?tt_medium=live_embed&tt_content=text_link' style='padding: 2px 0px 4px; width: 400px; font-size: 10px; color: white; font-weight: normal; text-decoration: underline; display: block;'>Watch Live on www.twitch.tv/</a>");
            $("#streamer").html('<iframe style="width: 780px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + featuredStreamer + '/embed"></iframe>');
            $("#streamerChat").html('<iframe style="width: 400px; height: 444px;" scrolling="no" frameborder="0" src="https://www.twitch.tv/' + featuredStreamer + '/chat?popout="></iframe>');        
        }

    });

});
