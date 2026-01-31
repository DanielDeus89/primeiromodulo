// player.js

let player;
let currentIndex = 0;
let isDevMode = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: currentVideoId,
    playerVars: { rel: 0, modestbranding: 1, controls: 1 },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  player.unMute();
  seekToCurrentRange();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    checkTimeLoop();
  }
}

function toggleDevMode() {
  isDevMode = document.getElementById('devCheckbox').checked;
  document.getElementById("nextBtn").disabled = !isDevMode;
}

function checkTimeLoop() {
  const margem = 0.3;
  const range = timeRanges[currentIndex];
  if (!range) return;

  const check = () => {
    if (!player || player.getPlayerState() !== YT.PlayerState.PLAYING) return;

    const currentTime = player.getCurrentTime();
    if (currentTime >= range.end - margem || isDevMode) {
      player.pauseVideo();
      document.getElementById("nextBtn").disabled = false;
      return;
    }

    requestAnimationFrame(check);
  };

  requestAnimationFrame(check);
}

function seekToCurrentRange() {
  const range = timeRanges[currentIndex];
  if (!range) return;
  player.seekTo(range.start);
  player.playVideo();
  document.getElementById("nextBtn").disabled = !isDevMode;
}

function nextCard() {
  const cards = document.querySelectorAll(".card");
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
  seekToCurrentRange();
}

function prevCard() {
  const cards = document.querySelectorAll(".card");
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(currentIndex);
  seekToCurrentRange();
}

function showCard(index) {
  const cards = document.querySelectorAll(".card");
  const total = cards.length;

  const prevIndex = (index - 1 + total) % total;
  const nextIndex = (index + 1) % total;

  cards.forEach((card, i) => {
    card.classList.remove("active", "next", "prev", "hidden");

    if (i === index) {
      card.classList.add("active");
      card.style.zIndex = 2;
    } else if (i === nextIndex) {
      card.classList.add("next");
      card.style.zIndex = 1;
    } else if (i === prevIndex) {
      card.classList.add("prev");
      card.style.zIndex = 1;
    } else {
      card.classList.add("hidden");
      card.style.zIndex = 0;
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onload = () => {
  showCard(currentIndex);
};


function playSegment(start, end) {
  if (!player || typeof player.seekTo !== 'function') {
    console.warn("Player não está pronto ainda.");
    return;
  }

  player.seekTo(start);
  player.playVideo();

  setTimeout(() => {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    }
  }, (end - start) * 1000);
}
