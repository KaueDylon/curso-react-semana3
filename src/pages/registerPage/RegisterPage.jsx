import "./RegisterPage.css";

function RegisterPage() {
  return (
    <>
      <div className="page-body">
        <div className="card-login">
          <div>
            <h2>Bem-vindo ao Compraki</h2>
            <h2>Crie agora mesmo a sua conta</h2>
          </div>

          <div className="card-inputs">
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

          <button className="btn-entrar">Criar</button>
          <a className="btn-criar-conta" href="">
            Entrar com sua conta
          </a>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
