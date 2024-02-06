// Variable penangkap ID
const msc_play = document.getElementById("msc_play");
const msc_pause = document.getElementById("msc_pause");

// Function Play
msc_play.onclick = function () {
  pageBGM.play();
};

// Function Pause
msc_pause.onclick = function () {
  pageBGM.pause();
};
