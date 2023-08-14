import React from "react";
import heroImg from "../pngwing.com.png"

export default function Hero(){
    return(
        <div className="hero">
            <img src={heroImg} alt="heroImage" className="hero--img"/>
            <h1 className="hero--header">Naruto Uzumaki - Hero Of Konoha</h1>
            <p className="hero--text">Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
            <h1 className="card--header">Characters</h1>
        </div>
    )
}