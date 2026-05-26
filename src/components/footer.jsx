import "../styles/footer.css";
import { Link } from "react-router-dom";


function Footer() {
  return(
    <footer>
      <div className="footer-content">
        <h2 className="titulo">Vanessa de Paula Berbone</h2>
        <p>Psicóloga Clínica • CRP: 00/00000</p>
        <span className="entre-contato">Entre em contato: (14) 99999-9999</span>
      </div>
        <div className="direitos">
      © 2026 Vanessa de Paula Berbone - Todos os direitos reservados
    </div>
      

    
    </footer>
  );
}

export default Footer;