import React from "react"
import memesData from "../memesData.js"

export default function Meme() {

    function getRandomMemeImage() {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        console.log(url); //Log the URL

    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getRandomMemeImage}
                >
                    Get a new meme image 🖼   
                </button>
            </div>
        </main>
    )
}