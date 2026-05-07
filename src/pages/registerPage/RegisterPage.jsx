import "./RegisterPage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterPage() {
  const { register, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await register(nome, email, password);
      navigate("/login");
    } catch (error) {
      setError("Erro ao criar a conta");
    }
  }
  return (
    <>
      <div className="register-page">
        <form className="register-card" onSubmit={handleRegister}>
          <div>
            <h2>Bem-vindo ao Compraki</h2>
            <hr />
            <h2>Crie agora mesmo a sua conta</h2>
          </div>

          <div className="register-inputs">
            <label>
              Nome
              <input
                type="text"
                placeholder="Ex: Júlio Guedes..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label>
              E-mail
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

          <button className="register-btn-primary" type="submit">
            {loading ? "Criando..." : "Criar"}
          </button>

          <Link className="register-link" to="/login">
            Encontrar com sua conta
          </Link>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
