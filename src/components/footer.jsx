import "../styles/footer.css";
import Whatsapp from "../assets/whatsapp.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2 className="titulo">Vanessa de Paula Berbone</h2>

        <p>Psicóloga Clínica • CRP: 06/225624</p>

        <span className="entre-contato">
          Entre em contato: (14) 99999-9999
        </span>

        <div className="whatsapp-area">
          <a
            href="https://wa.me/5514997316730"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="Whatsapp" />
          </a>

          <a
            href="https://wa.me/5514997316730"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Whatsapp</p>
          </a>
        </div>

        <div className="direitos">
          © 2026 Gabriel Henrique Berbone Silva - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}

export default Footer;