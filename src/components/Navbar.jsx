import "../App.css"
import Logo from "./Images/logo.svg"
import "./Navbar.css"
import { useState } from "react"
import Hamburger from "./Images/hamburger2.png"
import { BrowserRouter as Router, Route, Routes,  Link } from 'react-router-dom';




function Navbar() {
    const [showNavbar, setshowNav] = useState(false)

    const handleShowNavbar = () => {
      setshowNav(!showNavbar)
    }

    return (
      <nav className="Navbar">
          <div className="container">
            <div className="Logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <img src={Hamburger} alt="Hamburger"/>
            </div>
            <div className={`Navitems nav-elements ${showNavbar && 'active'}`}>
              <ul>
                <li className="Home"><Link to ={"/"} className="nav-link">Home</Link></li>
                <li className="About"><Link to={"/about"} className="nav-link">About</Link></li>
                <li className="Menu"><Link to={"/menu"} className="nav-link">Menu</Link></li>
                <li className="Reservations"><Link to={"/booking"} className="nav-link">Reservations</Link></li>
                <li className="Order"><Link to={"/order"} className="nav-link">Order Online</Link></li>
                <li className="Login"><Link to={"/login"} className="nav-link">Login</Link></li>
              </ul>
            </div>
        </div>
      </nav>
    );
  }

  export default Navbar;