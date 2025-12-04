// Dynamic greeting
const greetingEl = document.getElementById("dynamic-greeting");
if (greetingEl) {
  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour >= 5 && hour < 12) greeting = "Good morning";
  else if (hour >= 12 && hour < 18) greeting = "Good afternoon";
  greetingEl.textContent = greeting;
}

// Simple player logic
const playPauseBtn = document.getElementById("play-pause");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerCover = document.getElementById("player-cover");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.querySelector(".current-time");
const totalTimeEl = document.querySelector(".total-time");

let isPlaying = false;

// Fake data: map track name to artist + cover
const trackData = {
  "Daily Mix 1": {
    artist: "Various Artists",
    cover: "https://via.placeholder.com/56?text=DM1"
  },
  "Chill Vibes": {
    artist: "Various Artists",
    cover: "https://via.placeholder.com/56?text=CV"
  },
  "Focus Flow": {
    artist: "Beats Collective",
    cover: "https://via.placeholder.com/56?text=FF"
  },
  "Discover Weekly": {
    artist: "Spotify",
    cover: "https://via.placeholder.com/56?text=DW"
  },
  "Release Radar": {
    artist: "Spotify",
    cover: "https://via.placeholder.com/56?text=RR"
  },
  "Daily Mix 2": {
    artist: "Various Artists",
    cover: "https://via.placeholder.com/56?text=DM2"
  },
  "Top 50 Global": {
    artist: "Various Artists",
    cover: "https://via.placeholder.com/56?text=T50"
  },
  "Peaceful Piano": {
    artist: "Peaceful Artists",
    cover: "https://via.placeholder.com/56?text=PP"
  },
  "RapCaviar": {
    artist: "Rap Stars",
    cover: "https://via.placeholder.com/56?text=RC"
  }
};

let duration = 225; // 3:45 (demo)
totalTimeEl.textContent = "3:45";

// Update timeline when user drags
progressBar.addEventListener("input", () => {
  const value = progressBar.value;
  const seconds = Math.floor((value / 100) * duration);
  currentTimeEl.textContent = formatTime(seconds);
});

// Format seconds → mm:ss
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Update player info
function loadTrack(trackName) {
  const data = trackData[trackName] || {
    artist: "Unknown Artist",
    cover: "https://via.placeholder.com/56"
  };
  playerTitle.textContent = trackName;
  playerArtist.textContent = data.artist;
  playerCover.src = data.cover;
}

// Card play buttons
const cardPlayButtons = document.querySelectorAll(".card-play-btn");
cardPlayButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.currentTarget.closest(".card");
    const trackName = card?.dataset.track || "Unknown Track";
    loadTrack(trackName);
    isPlaying = true;
    playPauseBtn.textContent = "Pause";
    playPauseBtn.setAttribute("aria-label", "Pause");
    console.log(`Now playing: ${trackName}`);
  });
});

// Play / pause
if (playPauseBtn) {
  playPauseBtn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? "Pause" : "Play";
    playPauseBtn.setAttribute("aria-label", isPlaying ? "Pause" : "Play");
    console.log(isPlaying ? "Playing..." : "Paused.");
  });
}

// Fake search handling (for UX, not real filter)
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        alert(`You searched for: "${query}" (demo only)`);
      }
    }
  });
}
