import React from 'react';
import './styles/styleMain.css';
import logo from './assets/logo-safeplay.png';
import './styles/globalsMain.css';

function App() {
  return (
    
    <div className="page">
      <div className="logo"><img src={logo} alt='logo' className='logo-padrao'/></div>

      <div className="frame-37968">
        <div className="links">
          <div className="j-tem-uma-conta-entrar">
            <span className="j-tem-uma-conta-entrar-span">Já tem uma conta?</span>
            <span className="j-tem-uma-conta-entrar-span2">Entrar</span>
          </div>
        </div>
        <div className="Headline">Bem vindo</div>
      </div>

      <form
        className="form-main"
        onSubmit={(e) => {
          e.preventDefault();
          // handle submit logic
        }}
      >
        <label className="label-nome">
          <span className="label">Nome do usuário</span>
          <input className="text-field" name="username" />
        </label>

        <label className="label-email">
          <span className="label">Email</span>
            <input className="text-field" type="email" name="email" />
        </label>

        <label className="label-senha">
          <span className="label">Senha</span>
          <input className="text-field" type="password" name="password" />
        </label>

        <div className="login frame-276">
          <button type="submit" className="btnlogin">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;