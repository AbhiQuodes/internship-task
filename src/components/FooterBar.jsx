import React from "react";
import "./FooterBar.css";
import logo from "../assets/whitelogo.svg";

import linkedin from "/src/assets/linkedin.svg";
import twitter from "/src/assets/twitter.svg";
import facebook from "/src/assets/facebook.svg";

const FooterBar = () => {
  return (
    <footer>
      <div className="foot-nav-bar">
        <img src={logo} alt="logo"></img>
        <ul className="list">
          <li>
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
        </ul>
        <ul style={{ gap: "15px" }}>
          <a href="#">
            <img src={linkedin} alt="linked"></img>
          </a>
          <a href="#">
            <img src={facebook} alt="facebook"></img>
          </a>
          <a href="#">
            <img src={twitter} alt="twitter"></img>
          </a>
        </ul>
      </div>

      <div class="container">
        <div className="box">
          <h3
            style={{
              backgroundColor: "rgba(185, 255, 102, 1)",
              color: "black",
              padding: "5px 10px",
              width: "fit-content",
              borderRadius: "10px",
            }}
          >
            Contact us
          </h3>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className="container">
          <div className="footer-contact-box">
            <button className="btn" style={{color:"white" , border:"1px solid white"}} >email</button>
            <button className="btn" style={{background: "rgba(185, 255, 102, 1)"}}>subscribe to news</button>
          </div>
        </div>
      </div>

      <hr></hr>
      <div >
        <div className="box" style={{display:"inline"}}>© 2023 Positivus. All Rights Reserved.</div>
        <a style={{color:"white" ,marginLeft:"40px",textDecoration:"underline"}} href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default FooterBar;
