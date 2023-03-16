//********TypeWriter Effect********\\

const textIntro = document.querySelector(".intro-header");
const stepsIntro = textIntro.textContent.length;
textIntro.style.setProperty('--stepsIntro', stepsIntro);
const textLoadIntro = () => {
  setTimeout(() => {
    textIntro.textContent = "Hello, my name is Noah Wood.";
    textIntro.style.setProperty('--stepsIntro', textIntro.textContent.length);
    setTimeout(() => {
      textIntro.textContent = "These are my projects.";
      textIntro.style.setProperty('--stepsIntro', textIntro.textContent.length);

    }, 4000);
  }, 0);
};

const textMusic = document.querySelector(".music-header");
const stepsMusic = textMusic.textContent.length;
textMusic.style.setProperty('--stepsMusic', stepsMusic);

const textLoadMusic = () => {
  setTimeout(() => {
    textMusic.textContent = "This is my music.";
    textMusic.style.setProperty('--stepsMusic', textMusic.textContent.length);
  }, 0);
};


//********Scrolling Animations********\\
 //Projects
const hiddenElements = document.querySelectorAll('.project');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('project-show');
      
    } else {
      entry.target.classList.remove('project-show');
    }
  });
}, {
  rootMargin: "-26% 0px -46% 0px",
  threshold: [0, 0.2]
});

//Music
const musicElements = document.querySelectorAll('.song');
const musicObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('song-show');
      
    } else {
      audioTrack.stop();
      entry.target.classList.remove('song-show');
    }
  });
}, {
  rootMargin: "0px 0px -46% 31%",
  threshold: [0, 1]
});


//Header
const headerElements = document.querySelectorAll('.music-header')
const headerObserver = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
      textLoadMusic();
        entry.target.classList.add('typewriter');
      
    } else {
      entry.target.classList.remove('typewriter');
    }
  });
}, {
  rootMargin: "0px 0px -40% 0px",
  threshold: [0, 0.2]
});

hiddenElements.forEach((el) => observer.observe(el));

musicElements.forEach(musicElement => {
  musicObserver.observe(musicElement);
});



//********Music Controls & Waveform********\\
var audioTrack = WaveSurfer.create ({
  container: ".song",
  waveColor: "white",
  progressColor: "#00ffb3",
  barWidth: 1,
  hideScrollbar: true,
});

audioTrack.load("../media/time indefinite.mp3");

const playBtn = document.querySelector(".play-btn");
const stopBtn = document.querySelector(".stop-btn");
const muteBtn = document.querySelectorAll(".mute-btn");
const volumeSlider = document.querySelector(".volume-slider");

playBtn.addEventListener("click", () => {
  audioTrack.playPause();

  if (audioTrack.isPlaying()) {
    playBtn.classList.add("playing");
  } else {
    playBtn.classList.remove("playing");
  }
});

stopBtn.addEventListener("click", () =>{
  audioTrack.stop();
});







textLoadIntro();
headerObserver.observe(textMusic);
