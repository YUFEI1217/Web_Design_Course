import './GameCarousel.css';
import React, {useState, useEffect} from "react";
import GameCarousel_img1 from "../images/ryan-quintal-_LYYX-EPr30-unsplash.jpg";
import GameCarousel_img2 from "../images/angga-r-putra-m4m5jqdX74U-unsplash.jpg";
import GameCarousel_img3 from "../images/ravi-palwe-CHAqx7kpnLQ-unsplash.jpg";
import GameCarousel_img4 from "../images/romeo-a-JrZvYuBYzCU-unsplash.jpg";

function GameCarousel({img_data}) {

    const [GamecurrentIndex, setGameCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [pauseAutoPlay, setPauseAutoPlay] = useState(true);
    const GameCarousel_imageList = [GameCarousel_img1, GameCarousel_img2, GameCarousel_img3, GameCarousel_img4];


    useEffect(() =>{
        const interval = setInterval( () => {
            pauseAutoPlay &&
            setGameCurrentIndex((prevIndex) => (prevIndex + 1) % img_data.length);
            setFade(true);
        },2500);
        return () => clearInterval(interval);
    });


    // Next & Prev

    const handleNext = () => {
        setGameCurrentIndex((prevIndex) => (prevIndex + 1) % img_data.length);
        setPauseAutoPlay(false);
    }

    const handlePrev = () => {
        setGameCurrentIndex((prevIndex) => (prevIndex - 1 + img_data.length) % img_data.length);
        setPauseAutoPlay(false);
    }

    return (
        <div className="Game_carousel_left">
            <button className="game__carousel_btn game__prev_btn" onClick={handlePrev}>{"<"}</button>
            
            <img className={"Game_carousel_img " + (fade && "fade")} src={GameCarousel_imageList[GamecurrentIndex]} alt={img_data[GamecurrentIndex]["Galt"]}/>
            <button className="game__carousel_btn game__next_btn" onClick={handleNext}>{">"}</button>
        </div>
    );
}

export default GameCarousel;
