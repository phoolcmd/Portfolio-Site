const text = document.querySelector(".header");
const steps = text.textContent.length;
text.style.setProperty('--steps', steps);

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Hello, my name is Noah Wood";
    text.style.setProperty('--steps', text.textContent.length);
    setTimeout(() => {
      text.textContent = "These are my projects...";
      text.style.setProperty('--steps', text.textContent.length);
      text.style.animation = "none";
      text.style.borderLeft = "2px transparent";
    }, 4000);
  }, 0);
};





textLoad();