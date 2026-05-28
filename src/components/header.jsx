import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo-area">
        <h1>Vanessa de Paula Berbone</h1>
         <p>Psicóloga Clínica • CRP: 06/225624</p>
      </div>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/servicos">Serviços</Link>
      </nav>

      <button className="btn-contato">
         <a
          href="https://wa.me/5514997316730"
          target="_blank"
          rel="noopener noreferrer">
            Ente em contato
        </a>
        
        
      </button>
    </header>
  );
}

export default Header;