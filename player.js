$(document).ready(function(){
$("#headerLiveTrackHolder").airtimeLiveTrackInfo({
    sourceDomain: "http://airtime.radiofords.com/",
    text: {onAirNow:"On Air Now", offline:"Offline", current:"Current", next:"Next"},
    updatePeriod: 60 //seconds
});

$("#onAirToday").airtimeShowSchedule({
    sourceDomain: "http://airtime.radiofords.com/",
    text: {onAirToday:"On Air Today"},
    updatePeriod: 60, //seconds
    showLimit: 10
});


$("#player").jPlayer({
  ready: function () {
    $(this).jPlayer("setMedia", {
      mp3: "http://airtime.radiofords.com:8000/airtime_160.mp3",
      oga: "http://airtime.radiofords.com:8000/airtime_160"
    }).jPlayer("play");
   },
 
  ended: function (event) {
    $(this).jPlayer("play");
    $("#largePlayButton").remove();
},

  swfPath: "",
  supplied: "oga,mp3"
 });

$(".playPauseButton").click(function() {
 swap_pause();	
})

$("#muteButton").click(function() {
 swap_mute();	
})

function swap_pause() {
  if ($('#player').data().jPlayer.status.paused) {
    $('#player').jPlayer('play');
    $("#playButton").attr("id", "pauseButton")
  } else {
    $('#player').jPlayer('pause'); 
    $("#pauseButton").attr("id", "playButton")
  }
  $("#largePlayButton").remove();
}
function swap_mute() {
  $(this).remove();
  if ($('#player').data().jPlayer.options.muted) {
    $('#player').jPlayer('unmute');
    $("#muteButton").html("Mute");
  } else { $('#player').jPlayer('mute'); 
    $("#muteButton").html("Unmute")
  }
}

// Allow volume mute on load if desired by setting a setting variable BEFORE load.
if (typeof muteOnLoad !== "undefined") {
  $("#muteButton").trigger("click");
}

});

$(document).on("click", "#largePlayButton", function() {
  $('#player').jPlayer('play');
  $(this).html("Loading...");
  $(this).fadeOut(3000);
});

