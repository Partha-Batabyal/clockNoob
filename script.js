let p = document.querySelector(".p");
let m;

setInterval(() => {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  m = `${hours}:${minutes}:${seconds}`;
  p.innerHTML = m;

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
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
   

}, 1000);
