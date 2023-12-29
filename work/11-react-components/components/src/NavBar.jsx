import './NavBar.css'

function NavBar({setPage}){

    function go(event, page) { 
        event.preventDefault();
        setPage(page);
    }

    return (
        <nav className="Navbar--Global">
            <ul className="Navbar--list">
                <li className="Navbar--item"><a className="Navbar--link" href="" onClick={ (e) => go(e, "Home") }>
                Home
                </a></li>
                <li className="Navbar--item"><a className="Navbar--link" href="" onClick={ (e) => go(e, "Cats") }>
                Cats
                </a></li>
                <li className="Navbar--item"><a className="Navbar--link" href="" onClick={ (e) => go(e, "About") }>
                About
                </a></li>
            </ul>
        </nav>
    );
}

export default NavBar;