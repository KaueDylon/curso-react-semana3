import "./LoginPage.css";

function LoginPage() {
  return (
    <>
      <div className="page-body">
        <div className="card-login">
          <div>
            <h2>Bem-vindo ao Compraki</h2>
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
          <a className="btn-criar-conta" href="">
            Criar uma conta
          </a>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
