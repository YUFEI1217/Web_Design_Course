import GameCard from "./GameCard";
import './Games.css';

function Games({setPage}) {
    return (
        <div className="games">
            <h2 className="game_h2_title">Game Introduction</h2>
            <GameCard setPage={setPage}/>
        </div>
    );
}

export default Games;