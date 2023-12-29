import GameCardList from "./data/GameCardList";
import Button from "./Button";
import './GameCard.css';
import Mario_img from "../images/mika-baumeister-HUyICL8qbEE-unsplash.jpg";
import COD_img from "../images/kabita-darlami-M781Pz0te-0-unsplash.jpg";
import PUBG_img from "../images/screen-post-hIXmJH9xhoo-unsplash.jpg";


function GameCard({setPage}) {

    function changePage(e) {
        e.preventDefault();
        console.log(e.target.pathname);
        window.history.pushState(null, '', e.target.pathname);
        setPage(e.target.pathname);
        window.scrollTo({top:200, behavior:"smooth"});
    }

    const gamecard_list = [Mario_img, COD_img, PUBG_img];

    const list = GameCardList.map( (item,idx) => {
        return (
          <li className="main_item" key={item.Gname}>
            <div className='card'>
                <h3 className='card_title'>
                    {item.Gname}
                </h3>
                <img className='card_img' src={gamecard_list[idx]} alt={item.alt}/>
                <p>{item.description}</p>
                <Button className="card_link" type="button" visual="button"><a className="btn_inside_link" href="/GameDetail" onClick={changePage}>Read More</a></Button>
            </div>
          </li>
        );
    });


    return (
        <ul className="main_list">
            { list }
        </ul>
    );

}

export default GameCard;