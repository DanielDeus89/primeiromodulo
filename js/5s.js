function back5Seconds() {
  if (typeof player !== "undefined" && player && typeof player.getCurrentTime === "function") {
    const currentTime = player.getCurrentTime();
    const newTime = Math.max(0, currentTime - 5);

    player.seekTo(newTime, true);
    player.playVideo();
  }
}

