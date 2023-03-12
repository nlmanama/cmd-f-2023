import React, {useState} from "react";
import "./Style.css";

export default function HomePage () {

    const [value, setValue] = useState("");
    const handleButtonClick = () => {
        setValue(document.getElementById("textarea").value);

    }

    return (
        <>
        <div class="row">   
            <div class="header">
                <h1>summaRiff</h1>
                <p>A text-to-speech & speech-to-text summarizer</p>
            </div>
            
            <div class="column left"> <center>
                <p><center>Text</center></p>
                <div class="wrapper">
                <div class = "textArea"><center>
                    <textarea id="textarea"></textarea>
                    </center>
                </div>    
                </div>
                <button onClick={handleButtonClick}>Summarize</button>
                    <p>Value: {value}</p>


            </center></div>
            
            <div class="column right"> <center>
                <p><center>Summary</center></p>
            
                <script src="Vocalize.js"></script>
                <div class="wrapper">
                </div>

                <div class="button">
                    <form action="#">
                        <button>Speaker Button</button>
                    </form>
                </div>
            </center></div>
            
        </div>
        
        </>
    );
}