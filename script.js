let p = document.querySelector(".p");
let m;

window.onload = function () {
  let date = new Date();
  let hours = date.getHours();
  let speechMessage;
  if (hours >= 1 && hours < 12) {
    speechMessage = "Good Morning, sir";
  } else if (hours >= 12 && hours < 18) {
    speechMessage = "Good Afternoon, sir";
  } else if (hours >= 18 && hours < 24) {
    speechMessage = "Good Evening, sir";
  } else {
    speechMessage = "Hello, sir";
  }
  let speech = new SpeechSynthesisUtterance(speechMessage);
  window.speechSynthesis.speak(speech);
};

setInterval(() => {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  m = `${hours}:${minutes}:${seconds}`;
  p.innerHTML = m;
}, 1000);
