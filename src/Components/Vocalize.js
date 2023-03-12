const speechBtn = document.querySelector("speaker");

let synth = speechSynthesis;
let isSpeaking = true;

speechBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (textarea.value !== "") {
    if (!synth.speaking) {
      textToSpeech(textarea.value);
    }
    if (textarea.value.length > 80) {
      setInterval(() => {
        if (!synth.speaking && !isSpeaking) {
          isSpeaking = true;
          speechBtn.innerText = "Speaker Button";
        }
      }, 500);
      if (isSpeaking) {
        synth.resume();
        isSpeaking = false;
        speechBtn.innerText = "Pause";
      } else {
        synth.pause();
        isSpeaking = true;
        speechBtn.innerText = "Resume";
      }
    } else {
      speechBtn.innerText = "Speaker Button";
    }
  }
});