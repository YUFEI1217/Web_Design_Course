import './GlobalNav.css'
import menu from './menu';
import { useState } from 'react';


function GlobalNav({ className }) {

    function go(event, page) { 
        event.preventDefault();
        setPage(page);
    }

    const list = menu.map( item => {
        return (
          <li className="global-nav__item" key={item.name}>
            <a className="global-nav__link" href={item.path}>
              {item.name}
            </a>
          </li>
        );
    });


    return (
        <nav className={`global-nav ${className}`}>
        <ul className="global-nav__list">
            { list }
        </ul>
        </nav>
    );

  //   return (
  //     <nav>
  //         <ul>
  //             <li><a href="" onClick={ (e) => go(e, "Home") }>
  //             Home
  //             </a></li>
  //             <li><a href="" onClick={ (e) => go(e, "About") }>
  //             About
  //             </a></li>
  //         </ul>
  //     </nav>
  // );

    // const [showMenu, setShowMenu] = useState(false);
    // const menuHtml = (
    //     <ul className="global-nav__list">
    //       { list }
    //     </ul>
    //   );
    
    // { showMenu && menuHtml}

    // return ( 
    //     <button onClick={ () => setShowMenu(!showMenu)} aria-label={showMenu ? "Close Menu" : "Open Menu"}>{ showMenu ? "Close Menu" : "Open Menu"}</button>

    //  // more JSX
    // );

}

export default GlobalNav;
  