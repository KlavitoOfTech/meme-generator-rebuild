import trollFace from "../images/troll-face.png";

export default function Header() {
    return (
            <header className="header">
            <img 
                src={trollFace} 
                className="header--image" 
                alt="Troll Face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <button className="header--project">Choose File</button>
        </header>
    );
}
