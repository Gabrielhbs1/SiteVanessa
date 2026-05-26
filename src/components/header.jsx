import "../styles/header.css";
import { Link } from "react-router-dom";

import logo from "../assets/LogoFestaJulina.png";


export default function Header() {
  return (
    
  
        <header className="main-header">
          <div className="header-content">
            <img
              src={logo}
              alt="Logo SENAI"
              className="logo-senai"
            />

            <div className="bandeirinhas"></div>
          </div>
        </header>

    
  );
}
