import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-area">
        <h1>Vanessa de Paula Berbone</h1>
         <p>Psicóloga Clínica • CRP: 00/00000</p>
      </div>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/servicos">Serviços</Link>
      </nav>

      <button className="btn-contato">
        Entre em contato
        
      </button>
    </header>
  );
}

export default Header;