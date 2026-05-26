import "../styles/footer.css";
import { Link } from "react-router-dom";

import logo from "../assets/LogoFestaJulina.png";
import insta from "../assets/insta.png";
import facebook from "../assets/face.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links-footer container">
        <img src={logo} className="logo-footer" />

        <div>
          <p className="sobre-footer">Opções</p>
          <Link to="/perguntas">Perguntas</Link>
          <Link to="/editar_evento">Editar Evento</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/pedidos">Pedidos</Link>
          <Link to="/usuarios">Usuários</Link>
        </div>

        <div>
          <p className="sobre-footer">Redes Sociais</p>
          <div className="redesSociais">
            <img src={insta} className="icon-social" />
            <a className="links-footer">Instagram</a>
            <img src={facebook} className="icon-social" />
            <a className="links-footer"> Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
