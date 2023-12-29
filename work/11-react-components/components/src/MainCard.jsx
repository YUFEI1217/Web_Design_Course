import card from './card';
import './MainCard.css';
import { useState } from 'react';
import Button from './Button';
import Home from './Home';
import Cats from './Cats';
import NavBar from './NavBar';


function MainCard({setPage }) {

    function go(event, page) { 
        event.preventDefault();
        setPage(page);
    };

    const list = card.map( item => {
        return (
          <li className="main_item" key={item.Hname}>
            <div className='card'>
                <h3 className='card_title'>
                    {item.Hname}
                </h3>
                <img className='card_img' src={item.img} alt={item.alt}/>
                <p>{item.description}</p>
                <Button className="card_link" type="button" visual="button" onClick={ () => window.location.href="Home"}>Read More</Button>
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

export default MainCard;
  