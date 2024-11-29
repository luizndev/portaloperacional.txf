import Header from "../../components/Header/Header.jsx";
import { FcInspection } from "react-icons/fc";
import { FaEyeDropper } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { FcSupport } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./abrir-chamado.css";

function App() {
  const [titulo, setTitulo] = useState("Clique em uma das opções abaixo 👇👇");
  const [showFormTi, setShowFormTi] = useState(false);
  const [showFormManutencao, setShowFormManutencao] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    setor: "",
    descricao: "",
  });
  const navigate = useNavigate();

  const handleTiClick = () => {
    setShowFormTi(true);
    setTitulo("Chamado para o Setor Tecnologia da Informação");
    setShowFormManutencao(false);
    setActiveButton("ti");
  };

  const handleManutencaoClick = () => {
    setShowFormTi(false);
    setTitulo("Chamado para o Setor Manutenção");
    setShowFormManutencao(true);
    setActiveButton("manutencao");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint =
      activeButton === "ti"
        ? "https://api-portaloperacional.vercel.app/api/calls/ti"
        : "https://api-portaloperacional.vercel.app/api/calls/manutencao";
    try {
      const response = await axios.post(endpoint, {
        name: formData.nome,
        email: formData.email,
        sector: formData.setor,
        description: formData.descricao,
      });
      console.log(response);
      navigate(`/`);
    } catch (error) {
      console.error("Erro ao abrir chamado:", error);
    }
  };

  return (
    <>
      <Header></Header>
      <section className="formOptions">
        <h1>{titulo}</h1>
        <div className="optionList">
          <button
            id="openTi"
            onClick={handleTiClick}
            className={activeButton === "ti" ? "active" : "disable"}
          >
            <FcCustomerSupport /> Tecnologia da Informação
          </button>
          <button
            id="openManutencao"
            onClick={handleManutencaoClick}
            className={activeButton === "manutencao" ? "active" : "disable"}
          >
            <FcSupport /> Manutenção
          </button>
        </div>
        {showFormTi && (
          <div className="form-ti">
            <form onSubmit={handleSubmit}>
              <label>
                <span className="spanOfLabel">
                  <FaUser /> Nome:
                </span>
                <input
                  placeholder="Digite seu nome..."
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span className="spanOfLabel">
                  <MdEmail /> Email:
                </span>
                <input
                  placeholder="seuemail@kroton.com.br"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span className="spanOfLabel">
                  <MdOutlineWork /> Setor:
                </span>
                <input
                  placeholder="Ex.: Atendimento ao Aluno"
                  type="text"
                  name="setor"
                  value={formData.setor}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span className="spanOfLabel">
                  <FaEyeDropper /> Descrição:
                </span>
                <textarea
                  required
                  placeholder="Uma breve descrição do ocorrido para abertura do chamado"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                ></textarea>
              </label>
              <button id="sendForm" type="submit">
                <FcInspection /> Abrir Chamado
              </button>
            </form>
          </div>
        )}
        {showFormManutencao && (
          <div className="form-manutencao">
            <form onSubmit={handleSubmit}>
              <label>
                <span className="spanOfLabel">
                  <FaUser /> Nome:
                </span>
                <input
                  placeholder="Digite seu nome..."
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span className="spanOfLabel">
                  <MdEmail /> Email:
                </span>
                <input
                  placeholder="seuemail@kroton.com.br"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span className="spanOfLabel">
                  <MdOutlineWork /> Setor:
                </span>
                <input
                  placeholder="Ex.: Atendimento ao Aluno"
                  type="text"
                  name="setor"
                  value={formData.setor}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span className="spanOfLabel">
                  <FaEyeDropper /> Descrição:
                </span>
                <textarea
                  required
                  placeholder="Uma breve descrição do ocorrido para abertura do chamado"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                ></textarea>
              </label>
              <button id="sendForm" type="submit">
                <FcInspection /> Abrir Chamado
              </button>
            </form>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
