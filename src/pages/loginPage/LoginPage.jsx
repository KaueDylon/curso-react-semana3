import "./LoginPage.css";

import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="page-body">
        <div className="card-login">
          <div>
            <h2>Bem-vindo ao Compraki</h2>
            <hr />
          </div>

          <div className="card-inputs">
            <label>
              Nome
              <input type="text" placeholder="Ex: Júlio Guedes..." />
            </label>
            <label>
              Senha
              <input type="password" placeholder="..." />
            </label>
          </div>

          <button className="btn-entrar">Entrar</button>

          <Link className="btn-criar-conta" to="/cadastro">
            Criar uma conta
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
