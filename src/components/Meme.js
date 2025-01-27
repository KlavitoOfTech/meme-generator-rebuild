import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    function getRandomMemeImage() {
        const memesArray = memesData?.data?.memes || [];
        if (memesArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * memesArray.length);
            const url = memesArray[randomIndex].url;
            setMeme((prevMeme) => ({
                ...prevMeme,
                randomImage: url,
            }));
        } else {
            console.warn("No memes available in memesData");
        }
    }

    const { topText, bottomText, randomImage } = meme;

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    name="topText"
                    value={topText}
                    onChange={handleChange}
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    name="bottomText"
                    value={bottomText}
                    onChange={handleChange}
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button className="form--button" onClick={getRandomMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="image--container">
                <img src={randomImage} alt="Meme" className="meme--image" />
                <h3 className="meme--text top">{topText || "Top Text"}</h3>
                <h3 className="meme--text bottom">{bottomText || "Bottom Text"}</h3>
            </div>
        </main>
    );
}
