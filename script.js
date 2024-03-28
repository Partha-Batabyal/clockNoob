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
 if (hours >= 1 && hours < 12) {
   sound = `Good Morning sir, now time is${hours}:${minutes}`;
 } else if (hours >= 12 && hours < 18) {
   sound = `Good Afternoon, sir now time is ${hours}:${minutes}`;
 } else if (hours >= 18 && hours < 24) {
   sound = `Good Evening sir, now time is ${hours}:${minutes}`;
 } else {
   sound = `Hello sir, now time is ${hours}:${minutes}`;
 }
  let msg = new SpeechSynthesisUtterance();
  msg.lang = "en-IN";
  msg.rate = 1;
  msg.text = sound;
  console.log(sound);
  window.speechSynthesis.speak(msg);
}

window.addEventListener("DOMContentLoaded", () => {
  
  speak();
  document.querySelector(".box").addEventListener("click", speak);
});
