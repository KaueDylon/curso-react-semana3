import "./RegisterPage.css";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <div className="register-page">
        <div className="register-card">
          <div>
            <h2>Bem-vindo ao Compraki</h2>
            <hr />
            <h2>Crie agora mesmo a sua conta</h2>
          </div>

          <div className="register-inputs">
            <label>
              Nome
              <input type="text" placeholder="Ex: Júlio Guedes..." />
            </label>
            <label>
              E-mail
              <input type="email" placeholder="Ex: julioGued@email.com.br" />
            </label>
            <label>
              Senha
              <input type="password" placeholder="..." />
            </label>
          </div>

          <button className="register-btn-primary">Criar</button>

          <Link className="register-link" to="/login">
            Encontrar com sua conta
          </Link>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
