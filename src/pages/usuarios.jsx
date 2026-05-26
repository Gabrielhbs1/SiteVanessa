import "../styles/usuarios.css";

import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Usuarios() {
  const [search, setSearch] = useState("");
  const [perfil, setPerfil] = useState("");

  const usuarios = [
    {
      nome: "Ana Pereira",
      email: "ana@gmail.com",
      telefone: "14991234567",
      perfil: "Portaria",
    },
    {
      nome: "Bruno Costa",
      email: "bruno@gmail.com",
      telefone: "14992345678",
      perfil: "Usuario",
    },
    {
      nome: "Carla Mendes",
      email: "carla@gmail.com",
      telefone: "14993456789",
      perfil: "Portaria",
    },
    {
      nome: "Diego Alves",
      email: "diego@gmail.com",
      telefone: "14994567890",
      perfil: "Usuario",
    },
    {
      nome: "Eduardo Lima",
      email: "eduardo@gmail.com",
      telefone: "14995678901",
      perfil: "Usuario",
    },
    {
      nome: "Fernanda Rocha",
      email: "fernanda@gmail.com",
      telefone: "14996789012",
      perfil: "Usuario",
    },
    {
      nome: "Gabriel Souza",
      email: "gabriel@gmail.com",
      telefone: "14997890123",
      perfil: "Usuario",
    },
    {
      nome: "Helena Martins",
      email: "helena@gmail.com",
      telefone: "14998901234",
      perfil: "Usuario",
    },
    {
      nome: "Igor Fernandes",
      email: "igor@gmail.com",
      telefone: "14999012345",
      perfil: "Usuario",
    },
    {
      nome: "Juliana Castro",
      email: "juliana@gmail.com",
      telefone: "14990123456",
      perfil: "Usuario",
    },
  ];

  const filtrados = usuarios.filter(
    (u) =>
      u.nome.toLowerCase().includes(search.toLowerCase()) &&
      (perfil === "" || u.perfil === perfil),
  );
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h4>Usuários cadastrados</h4>

          <div className="filters">
            <input
              type="search"
              placeholder="Pesquisar usuário por nome"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select value={perfil} onChange={(e) => setPerfil(e.target.value)}>
              <option value="">Filtrar por perfil</option>
              <option value="Admin">Administrador</option>
              <option value="Portaria">Portaria</option>
              <option value="Usuario">Usuário</option>
            </select>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nome Completo</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>Perfil</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtrados.length > 0 ? (
                  filtrados.map((u, index) => (
                    <tr key={index}>
                      <td>{u.nome}</td>
                      <td>{u.email}</td>
                      <td>{u.telefone}</td>
                      <td>{u.perfil}</td>
                      <td>
                        <div className="acoes">
                          <button className="btn btn-outline-warning">
                            Editar
                          </button>
                          <button className="btn btn-outline-dange">
                            Excluir
                          </button>
                          {/*Botão para teste de notificação <button className="btn  btn-outline-dagger" onClick={() => toast("Teste")}>
                            Testar notificação
                          </button> */}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Nenhum dado encontrado</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
