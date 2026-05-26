import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Header />

        <main>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}