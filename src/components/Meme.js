import React from "react";
import Header from "./Header";
import html2canvas from "html2canvas"; // Import html2canvas

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    });

    const [allMemes, setAllMemes]= React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes)) // Access memes array correctly
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    }

    function getRandomMemeImage() {
        if (allMemes.length > 0) {
            const randomIndex = Math.floor(Math.random() * allMemes.length);
            const url = allMemes[randomIndex].url;
            setMeme((prevMeme) => ({
                ...prevMeme,
                randomImage: url,
            }));
        } else {
            console.warn("No memes available in memesData");
        }
    }

    const { topText, bottomText, randomImage } = meme;

    function downloadMeme() {
        const memeContainer = document.querySelector(".image--container");

        html2canvas(memeContainer, { useCORS: true }).then(canvas => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png"); // Convert canvas to image
            link.download = "meme.png"; // Set download file name
            link.click(); // Trigger download
        });
    }

    return (
        <main className="main">
            <Header/>
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
                <button className="form--button download" onClick={downloadMeme}>
                    Download Meme ⬇️
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
