import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usuarios from "./pages/usuarios";
import Entrar from "./pages/loginUsuarios";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrar />} />
        <Route path="/Usuarios" element={<Usuarios />} />
        <Route path="/loginUsuarios" element={<Entrar />} />
      </Routes>
    </BrowserRouter>
  );
}
