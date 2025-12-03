const playPauseBtn = document.getElementById("play-pause");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  isPlaying = !isPlaying;
  playPauseBtn.textContent = isPlaying ? "Pause" : "Play";

  // Basic demo behavior
  console.log(isPlaying ? "Playing..." : "Paused.");
});
