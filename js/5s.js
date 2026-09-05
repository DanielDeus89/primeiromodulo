// 5s.js

function back5Seconds() {
  if (
    typeof player === "undefined" ||
    !player ||
    typeof player.getCurrentTime !== "function" ||
    typeof player.seekTo !== "function"
  ) {
    console.warn("Player ainda não está pronto.");
    return;
  }

  const currentTime = player.getCurrentTime();
  const newTime = Math.max(0, currentTime - 5);

  player.seekTo(newTime, true);
  player.playVideo();
}