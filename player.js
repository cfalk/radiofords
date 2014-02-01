$(document).ready(function(){
$("#headerLiveTrackHolder").airtimeLiveTrackInfo({
    sourceDomain: "http://chestnut.fig.haverford.edu/",
    text: {onAirNow:"On Air Now", offline:"Offline", current:"Current", next:"Next"},
    updatePeriod: 60 //seconds
});

$("#onAirToday").airtimeShowSchedule({
    sourceDomain: "http://chestnut.fig.haverford.edu/",
    text: {onAirToday:"On Air Today"},
    updatePeriod: 60, //seconds
    showLimit: 10
});


$("#player").jPlayer({
  ready: function () {
  $(this).jPlayer("setMedia", {
   mp3: "http://chestnut.fig.haverford.edu:8000/airtime_128.mp3",
   oga: "http://chestnut.fig.haverford.edu:8000/airtime_128"
   }).jPlayer("play");
   },
 
ended: function (event) {
  $(this).jPlayer("play");
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
  }
  else { $('#player').jPlayer('pause'); 
   $("#pauseButton").attr("id", "playButton")
  }
 }
 function swap_mute() {
 if ($('#player').data().jPlayer.options.muted) {
   $('#player').jPlayer('unmute');
   $("#muteButton").html("Mute");
 }
  else { $('#player').jPlayer('mute'); 
  $("#muteButton").html("Unmute")
  }
 }

});



