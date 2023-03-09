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
  rootMargin: "0px 0px -40% 0px",
  threshold: [0, 0.2]
});

//Music
const musicElements = document.querySelectorAll('.music');
const musicObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('music-show');
      
    } else {
      entry.target.classList.remove('music-show');
    }
  });
}, {
  rootMargin: "0px 0px -40% 0px",
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




//********Music Player (Progress Bar)********\\
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let intervalId;

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;
}

function playPause() {
  if(ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    clearInterval(intervalId);
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    intervalId = setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
}

progress.onchange = function(){
  song.currentTime = progress.value;
  if (song.paused) {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    intervalId = setInterval(() => {
      progress.value = song.currentTime;
    }, 500);
  }
}

song.onended = function() {
  clearInterval(intervalId);
  ctrlIcon.classList.remove("fa-pause");
  ctrlIcon.classList.add("fa-play");
}

hiddenElements.forEach((el) => observer.observe(el));

musicElements.forEach(musicElement => {
  musicObserver.observe(musicElement);
});

textLoadIntro();
headerObserver.observe(textMusic);
