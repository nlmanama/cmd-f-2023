import React from "react";
import "./Style.css";

export default function HomePage () {
    return (
        <div class="row">   
            <div class="header">
            <h1>summaRiff</h1>
            <p>A text-to-speech & speech-to-text summarizer</p>
            </div>

            <div class="column left">
            <p><center>Text</center></p>
            </div>

            
            <div class="column right">
            <p><center>Summary</center></p>
            </div>
        </div>
    );
}