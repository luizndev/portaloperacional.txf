import { Link } from "react-router-dom";
import poLogo from "/portaloperacional.png";
import "./Header.css";

function App() {
  return (
    <>
      <header className="headerPrincipal">
        <Link className="imageHeader" to={"/"}>
          <img src={poLogo} alt="" />
        </Link>
        <ul>
          <Link to={"/abrir-chamado"}>
            <li>Abrir Chamado</li>
          </Link>
          <Link>
            <li>Blog</li>
          </Link>
          <Link>
            <li>Squad de Operação</li>
          </Link>
        </ul>
        <Link to={"/login"}>
          <button>Entrar na Plataforma</button>
        </Link>
      </header>
    </>
  );
}

export default App;
