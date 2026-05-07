import "./LoginPage.css";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { login, loading } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);

      const from = location.state?.from?.pathname || "/";

      navigate(from, { replace: true });
    } catch (error) {
      setError("Email ou senha inválidos.");
    }
  }

  return (
    <>
      <div className="page-body">
        <form className="card-login" onSubmit={handleLogin}>
          <div>
            <h2>Bem-vindo ao Compraki</h2>
            <hr />
          </div>

          <div className="card-inputs">
            <label>
              Email
              <input
                type="email"
                placeholder="Ex: julioGued@email.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                placeholder="..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {error && <p>{error}</p>}

          <button className="btn-entrar" type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <Link className="btn-criar-conta" to="/cadastro">
            Criar uma conta
          </Link>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
