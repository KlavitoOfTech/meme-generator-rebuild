import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const[meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    const[allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getRandomMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomIndex = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomIndex].url;
        setMeme(prevMeme => ({
            ...prevMeme, randomImage: url
        }));
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
                <img src={meme.randomImage} alt="Meme" className="meme--image" />
            </div>
        </main>
    )
}