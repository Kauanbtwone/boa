const video = document.getElementById("backgroundVideo");
let isDarkMode = false;

function switchToDarkMode() {
  document.body.style.backgroundColor = "black";
  video.style.opacity = 1;
  video.play();
  isDarkMode = true;
}

setTimeout(switchToDarkMode, 5000);
