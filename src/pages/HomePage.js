import React from "react";
import "./Style.css";

export default function HomePage () {
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
                <textarea></textarea>
                </div>

                <div class="button">
                    <form action="#">
                        <button>Summarize</button>
                    </form>
                </div>
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