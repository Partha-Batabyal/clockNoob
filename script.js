let p = document.querySelector(".p");
let m;

setInterval(() => {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  m = `${hours}:${minutes}:${seconds}`;
  p.innerHTML = m;
}, 1000);
// ?speak
function speak() {
  let sound;
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  if (hours >= 12) {
    if (hours > 12) {
      hours = hours - 12;
    }
    sound = `hello sir now time is ${hours}->>${minutes} PM`;
  } else {
    sound = `hello sir now time is ${hours}->>${minutes} AM`;
  }
  let msg = new SpeechSynthesisUtterance();
  msg.lang = "en-IN";
  msg.rate = 1;
  msg.text = sound;
  console.log(sound);
  window.speechSynthesis.speak(msg);
}

window.addEventListener("DOMContentLoaded", () => {
  // Wait for page to load before calling speak function
  // Otherwise, the element with class "box" may not have been created yet
  speak();
  document.querySelector(".box").addEventListener("click", speak);
});
