"use strict";

const menuToggle = document.querySelector(".mobile-menu");
const bxMenu = document.querySelector(".bx-menu");
const bxX = document.querySelector(".bx-x");
const navBar = document.querySelector(".navbar");

// open 

bxMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-menu")) {
    navBar.classList.add("show-navbar");
    bxMenu.classList.add("hide-bx");
    bxX.classList.add("show-bx");
  }
});

// close 

bxX.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-x")) {
    navBar.classList.remove("show-navbar");
    bxMenu.classList.remove("hide-bx");
    bxX.classList.remove("show-bx");
  }
});



var video = document.getElementById("homepageVideo");
var playButton = document.getElementById("play_button");

playButton.addEventListener("click", function() {
  if (video.paused === true) {
    video.play();
    playButton.innerHTML = '<i class="fa fa-pause"></i> Pause';

  } else {
    video.pause();
    playButton.innerHTML = '<i class="fa fa-play"></i> Play';
  }
});