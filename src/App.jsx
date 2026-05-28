import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Van from "./assets/van.png"

import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Header />

        <main>
          <div>
            <img className="Van" src={Van} alt="" />
          </div>
         
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}