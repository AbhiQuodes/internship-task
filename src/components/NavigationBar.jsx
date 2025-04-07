import React,{useState} from "react";
import "./NavigationBar.css";
import logo from "../assets/logo-brand.svg";
const NavigationBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <header>
      <img src={logo} alt="logo"></img>

      <div className="menu-toggle" onClick={toggleMenu}>        ☰
        </div>

      <ul className={menuOpen ? "active" : ""}>        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Servics</a>
        </li>

        <li>
          <a href="#">Use Cases</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Blog </a>
        </li>
        <li>
          <button> Request a Quote</button>
        </li>

      </ul>
    </header>
  );
};

export default NavigationBar;
