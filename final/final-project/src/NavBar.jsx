import NavList from "./data/NavList";
import './NavBar.css';
import GameDetail from "./GameDetail";
import ProductionDetail from "./ProductionDetail";
import { useState } from "react";
import ProductionDetail_2 from "./ProductionDetail_2";

function NavBar({ className, setPage, headerColorChange }) {

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleShowNav = () => {
        setShowNavbar(!showNavbar)
    }

    function changePage(e) {
        e.preventDefault();
        // console.log(e.target.pathname);
        window.history.pushState(null, '', e.target.pathname);
        setPage(e.target.pathname);
    }

    const list = NavList.map( (item,idx) => {
        // console.log("navbar:",item.name);
        if(item.name !== "Store"){
            return (
                <li className="global-nav__item" key={item.name}>
                  <a className="global-nav__link" href={item.path} onClick={changePage}>
                    {item.name}
                  </a>
                </li>
              );
        }
        else{
            return (
                <li className="global-nav__item" key={item.name}>
                  <a className="global-nav__link" href={item.path} onClick={changePage}>
                    {item.name}
                  </a>
                    <ul className="submenu">
                        <li className="submenu_item"><a className="submenu_link" href="/ProductionDetail" onClick={changePage}>PS5</a></li>
                        <li className="submenu_item"><a className="submenu_link" href="/ProductionDetail" onClick={changePage}>Xbox</a></li>
                        <li className="submenu_item"><a className="submenu_link" href={`ProductionDetail_${idx}`} onClick={changePage}>Switch</a></li>
                        <li className="submenu_item"><a className="submenu_link" href="/ProductionDetail_2" onClick={changePage}>Computer</a></li>
                    </ul>
                </li>
            );
        }
    });


    return (
      <nav className={`${className}`}>
        <div aria-label="Show" className="menu_icon" onClick={toggleShowNav}>
            <div></div>
            <div></div>
            <div></div>
        </div>
         <ul className={`${showNavbar ? 'global-nav__list__media' : 'global-nav__list'}`} style={{backgroundColor: headerColorChange ? "deepskyblue" : "rgb(0, 0, 107)"}}>
          { list }
        </ul>
        {/* {`${showNavbar ? 'global-nav__list' : 'global-nav__list__show'}`} */}
      </nav>
    );
}

export default NavBar;
  