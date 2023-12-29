import footerList from "./footerlist";
import './Footer.css';


function Footer() {

    const list = footerList.map( item => {
        return (
          <li className="nav_footer_item" key={item.name}>
            <a className="nav_footer_link" href={item.path}>
              {item.name}
            </a>
          </li>
        );
    });

    return (
        <footer className="footer">
            <ul className="footer_list">
            { list }
            </ul>
        </footer>
    );

}

export default Footer;