if ("webkitSpeechRecognition" in window) {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();
    let transcript = "";

    recognition.lang = "en-US";
    recognition.continuos = "true";
    recognition.interimResults = "true";

    recognition.onstart = () => {
        document.querySelector("#on").style.display = "block";
    };

    recognition.onend = () => {
        document.querySelector("#off").style.display = "block";
    };

    recognition.onError = () => {
        document.querySelector("#status").style.display = "none";
    };

    let finalTranscript = "";
    recognition.onresult = (event) => {
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }
        document.querySelector("#final").innerHTML = finalTranscript;
        document.querySelector("#interim").innerHTML = interimTranscript;
    };

    document.querySelector("#start").onclick = () => {
        recognition.start();
    };

    document.querySelector("#stop").onclick = () => {
        recognition.stop();
    };

} else {
    console.log("Speech Recognition not supported");
}