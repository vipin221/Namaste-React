import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";



const Header = () => {

  const [btnName, setbtnName] = useState("Login");



    return (
      <div className="header">
        <div className="App-logo">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <button onClick={()=> btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")} className="Login">{btnName}</button>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;
  