import NavBar from "./Navbar";
import './Header.css';
import { useState } from "react";
import LogoImage from '../images/701701507378_pic.jpg';
import Home from "./Home";

function Header({setPage, headerColorChange, setHeaderColorChange}) {

    const [showNavbar, setShowNavbar] = useState(false);
    // const [] = useState(true);

    function changePage(e) {
        e.preventDefault();
        window.history.pushState(null, '', e.target.pathname);
        setPage(e.target.pathname);
    }

    // const toggleShowNav = () => {
    //     setShowNavbar(!showNavbar)
    // }
    // setPage('/Home');

    return (
        <header className="header" style={{backgroundColor: headerColorChange ? "skyblue" : "darkblue"}}>
            <img
            src={LogoImage}
            className="header__logo"
            alt="The main Logo for sports website which is my personally own picture for my undergraduate university"
            />
            <div className="header__h1__area">
                <a className="skip_btn" onClick={() => window.scrollTo({top:260,behavior:"smooth"})}>Skiplink</a>
                <button className="theme__change-btn" onClick={() => setHeaderColorChange(!headerColorChange) }>Theme Change</button>
                <h1 className="header__title">
                    Welcome to Games World
                </h1>
            </div>
            <NavBar className="header__nav" setPage={setPage} headerColorChange={headerColorChange}/>
        </header>
    );
}

export default Header;