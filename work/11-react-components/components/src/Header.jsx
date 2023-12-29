import GlobalNav from "./GlobalNav";
import { useState } from 'react';
import './Header.css';
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Cats from "./Cats";

function Header() {
    const [page, setPage] = useState('Home');

    return (
        <header className="header">
            <img
                src="http://placekitten.com/100/100?image=1"
                className="header__logo"
                alt="Feline Overlords Logo"
            />
            <h1 className="header__title">
                Welcome to The Cats World
            </h1>
            {/* <GlobalNav className="header__nav"/> */}
        </header>
    );
}

export default Header;