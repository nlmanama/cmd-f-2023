const textarea = document.querySelector("textarea");
const speechBtn = document.querySelector("button");

let synth = speechSynthesis;
let isSpeaking = true;

function textToSpeech(text) {
  let utterance = new SpeechSynthesisUtterance(text);
  const voices = synth.getVoices();
  const microsoftEnglishVoice = voices.find((voice) => voice.name === "Microsoft Mark - English (United States)");
  utterance.voice = microsoftEnglishVoice;
  utterance.volume = 1;
  synth.speak(utterance);
}

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