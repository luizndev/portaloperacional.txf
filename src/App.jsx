import { FcCustomerSupport } from "react-icons/fc";
import { Link } from "react-router-dom";
import poLogo from "/portaloperacional.png";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Whatsapp from "./components/Whatsapp/Whatsapp.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <section className="sectionPrincipal1">
        <div className="groupH1">
          <h1>
            PortalOperacional<span>.txf</span>
          </h1>
          <h2>Revolucionando e Otimizando a Operação em Nossa Unidade</h2>
        </div>
        <span>Seu Aliado na Resolução de Operações</span>
        <span>Simplifique o Processo de Chamados para TI e Manutenção</span>
        <span>Portal Unificado para Informações Mais Precisas</span>
        <button>
          <Link>
            Abrir Chamado <FcCustomerSupport />
          </Link>
        </button>
      </section>
      {/* <section className="sectionPrincipal2">
        <iframe src="/video.mp4"></iframe>
        <div className="grupoTitulo">
          <h1>Giro de Profissões 2024</h1>
          <span>
            Graças ao Nosso Time de Operações, Disponibilizamos Tecnologia
            Avançada, Experiências de Laboratório e Espaços Agradáveis para
            Alunos do Ensino Médio Avaliarem e Se Matricularem
          </span>
        </div>
        <div className="grupoOperacoes">
          <div className="itemOperacoes">
            <img src="/elikais.png" alt="" />
            <div className="left">
              <h4>Elikais Souza</h4>
              <span>
                Responsavel por compras e estrategias para o evento ocorrer na
                conformidade!
              </span>
            </div>
          </div>
          <div className="itemOperacoes">
            <img src="/rafael.jfif" alt="" />
            <div className="left">
              <h4>Rafael de Souza Abade Junior</h4>
              <span>
                Responsavel pela Manutenção e Acompanhamento com Alunos
              </span>
            </div>
          </div>
          <div className="itemOperacoes">
            <img src="/luis.jpg" alt="" />
            <div className="left">
              <h4>Luis Eduardo Andrade Da Silva</h4>
              <span>Responsavel pelo Audiovisual do Evento</span>
            </div>
          </div>
          <div className="itemOperacoes">
            <img src="/logo.png" alt="" />
            <div className="left">
              <h4>Rivana Barros</h4>
              <span>
                Responsavel pelos Laboratório e Acompanhamento com Alunos
              </span>
            </div>
          </div>
          <div className="itemOperacoes">
            <img src="/logo.png" alt="" />
            <div className="left">
              <h4>Tayná Matos</h4>
              <span>
                Responsavel pelos Laboratório e Acompanhamento com Alunos
              </span>
            </div>
          </div>
        </div>
      </section> */}
      <footer>
        <img src={poLogo} alt="" />
      </footer>
      <Whatsapp></Whatsapp>
    </>
  );
}

export default App;
