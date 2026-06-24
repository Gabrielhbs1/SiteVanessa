import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Van from "./assets/van.png";

import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main>
          {/* Hero */}
          <section className="hero">
            <div className="hero-content">
              <h1>Cuidar da sua saúde emocional é um ato de coragem</h1>

              <p>
                Atendimento psicológico humanizado para ajudar você a
                compreender seus sentimentos, superar desafios e construir uma
                vida com mais equilíbrio e bem-estar.
              </p>

              <button className="btn-primary">
                Agendar Consulta
              </button>
            </div>

            <div className="hero-image">
              <img src={Van} alt="Psicóloga" />
            </div>
          </section>

          {/* Sobre */}
          <section className="about">
            <h2>Sobre a Profissional</h2>

            <p>
              Sou psicóloga especializada no acolhimento de adolescentes,
              adultos e idosos. Meu objetivo é oferecer um espaço seguro,
              respeitoso e livre de julgamentos para que cada pessoa possa
              desenvolver autoconhecimento e qualidade de vida.
            </p>
          </section>

          {/* Especialidades */}
          <section className="services">
            <h2>Áreas de Atendimento</h2>

            <div className="cards">
              <div className="card">
                <h3>Ansiedade</h3>
                <p>
                  Estratégias para compreender e lidar com pensamentos e
                  emoções que causam sofrimento.
                </p>
              </div>

              <div className="card">
                <h3>Depressão</h3>
                <p>
                  Acompanhamento psicológico focado no fortalecimento emocional
                  e recuperação do bem-estar.
                </p>
              </div>

              <div className="card">
                <h3>Relacionamentos</h3>
                <p>
                  Desenvolvimento de comunicação saudável e fortalecimento dos
                  vínculos afetivos.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="cta">
            <h2>Você não precisa enfrentar tudo sozinho(a)</h2>

            <p>
              Entre em contato e agende uma consulta para iniciar sua jornada
              de cuidado emocional.
            </p>

            <button className="btn-primary">
              Entrar em Contato
            </button>
          </section>
        </main>

        {/* Footer AGORA ESTÁ DENTRO DA DIV APP */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}