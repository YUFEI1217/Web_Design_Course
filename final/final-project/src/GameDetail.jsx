import { useState,useRef } from "react";
import './GameDetail.css';
import Button from "./Button";
import GameDetailCarouselList from "./data/GameDetailCarouselList";
import GameCarousel from "./GameCarousel";

function GameDetail() {

    const [gamePrice, setGamePrice] = useState(0);
    const DownloadGameDialogRef = useRef();
    const ConfirmDownloadDialogRef = useRef();

    return(
        <div className="game_detail_page">
            <GameCarousel img_data={GameDetailCarouselList}/>

            <div className="Game_detail_right">
                {/* <img className="game_detail_img" src="src/images/ryan-quintal-_LYYX-EPr30-unsplash.jpg" alt="The image of mario from https://unsplash.com/photos/mario-luigi-and-princess-peach-figurines-_LYYX-EPr30"/> */}
                <h2 className="Game_detail_title_h2">Super Mario Party</h2>
                <p className="game_detail_category">Strategy, Action, Video game series, Adventure Games, 5+, 3D platformers</p>
                <div className="Game_price_item">
                    <label htmlFor="Game_price__select" className="Game--price__label">Select a product</label>
                    <select id="Game_price__select" className="Game--price__select" name="price" value={gamePrice} onInput={
                        (e) => {
                            setGamePrice(e.target.value);
                        }
                    }>
                        <option value="">Please select the Edition</option>
                        <option value="34.99">Normal Edition</option>
                        <option value="45.99">Delue Edition</option>
                        <option value="56.99">Complete Edition</option>
                    </select>
                    <span className="Game_price_ShowSpan">{`$ ${gamePrice}`}</span>
                </div>
                <p className="Game_reward">Eligble for up to 300 Gold Points</p>
                <Button className="Game_download__btn" type="button" visual="button" onClick={()=>{DownloadGameDialogRef.current.showModal()}}>Direct download</Button>
                <dialog ref={DownloadGameDialogRef} className = "Downloadgame__modal" >
                    <form className="Downloadgame__form"  action="/submit" method="POST">
                        <h2 className="game__modal_title">Do you want to download this game?</h2>
                        <div className="game__input_button">
                            <Button className="game-form__button confirm_button" type="button" visual="button" onClick={()=>{DownloadGameDialogRef.current.close();ConfirmDownloadDialogRef.current.showModal();}}>Download</Button>
                            <Button className="game-form__button close_button" type="button" onClick={() => DownloadGameDialogRef.current.close()}>Close</Button>
                        </div>
                    </form>
                </dialog>
                <dialog ref={ConfirmDownloadDialogRef} className = "Confirm__modal" >
                    <form className="Confirm__form"  action="/submit" method="POST">
                        <h2 className="Confirm__modal_title">Downloading...</h2>
                        <Button className="confirm__close_button" type="button" onClick={() => ConfirmDownloadDialogRef.current.close()}>Close</Button>
                    </form>
                </dialog>
            </div>
        </div>
    );
}

export default GameDetail;