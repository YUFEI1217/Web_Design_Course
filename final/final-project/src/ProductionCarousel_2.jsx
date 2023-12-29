import './ProductionCarousel_2.css';
import React, {useState, useEffect} from "react";


function ProductionCarousel_2({img_data}) {

    const [ProductioncurrentIndex, setProductionCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const [pauseAutoPlay, setPauseAutoPlay] = useState(true);


    useEffect(() =>{
        const interval = setInterval( () => {
            pauseAutoPlay &&
            setProductionCurrentIndex((prevIndex) => (prevIndex + 1) % img_data.length);
            setFade(true);
        },2500);
        return () => clearInterval(interval);
    });


    // Next & Prev

    const handleNext = () => {
        setProductionCurrentIndex((prevIndex) => (prevIndex + 1) % img_data.length);
        setPauseAutoPlay(false);
    }

    const handlePrev = () => {
        setProductionCurrentIndex((prevIndex) => (prevIndex - 1 + img_data.length) % img_data.length);
        setPauseAutoPlay(false);
    }

    return (
        <div className="Production_carousel_left">
            <button className="Production__carousel_btn Production__prev_btn" onClick={handlePrev}>{"<"}</button>
            <img className={"Production_carousel_img " + (fade && "fade")} src={img_data[ProductioncurrentIndex]["Production_img"]} alt={img_data[ProductioncurrentIndex]["Palt"]}/>
            <button className="Production__carousel_btn Production__next_btn" onClick={handleNext}>{">"}</button>
        </div>
    );
}

export default ProductionCarousel_2;
