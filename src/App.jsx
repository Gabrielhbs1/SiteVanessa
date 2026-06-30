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

<div className="about-container">

<div className="about-text">

<p>
Sou Vanessa de Paula Berbone...
</p>

<p>
Minha missão é acompanhar pessoas...
</p>

<p>
Atendo pessoas que...
</p>

<p>
Será um prazer caminhar ao seu lado...
</p>

</div>

</div>

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

          <section className="avaliacoes">
        <h2> O que nossos clientes dizem</h2>

        <div className="carousel-avaliacoes">
          <div className="track">
            <div className="review">
              <h4>Maria S.</h4>
              <p>"Hambúrguer delicioso!"</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>

            <div className="review">
              <h4>João P.</h4>
              <p>"A melhor batata frita."</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div> 

            <div className="review">
              <h4>Ana C.</h4>
              <p>"Atendimento excelente."</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>

            <div className="review">
              <h4>Carlos M.</h4>
              <p>"Lanche muito bom!"</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
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

        
        <Footer />
      </div>
    </BrowserRouter>
  );
}