const audio = document.querySelector("audio");
      const playPauseBtn = document.querySelector(".play-pause-btn");

      let isPlaying = false;

      function togglePlayPause() {
        if (isPlaying) {
          audio.pause();
          isPlaying = false;
          playPauseBtn.className = "play-pause-btn";
        } else {
          audio.play();
          isPlaying = true;
          playPauseBtn.className = "play-pause-btn playing";
        }
      }

      playPauseBtn.addEventListener("click", togglePlayPause);