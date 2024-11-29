import poLogo from "/icon.png";
import "./login.css";

function App() {
  return (
    <div className="portalopLogin">
      <img src={poLogo} alt="" />
      <h1>Entrar no PortalOperacional.txf</h1>
      <form className="form">
        <label>
          <span className="spanOfLabel">Email:</span>
          <input
            placeholder="seuemail@kroton.com.br"
            type="email"
            name="email"
            required
          />
        </label>
        <label>
          <span className="spanOfLabel">Senha:</span>
          <input
            placeholder="Digite sua ******"
            type="password"
            name="senha"
            required
          />
        </label>
        <button id="sendForm" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default App;
