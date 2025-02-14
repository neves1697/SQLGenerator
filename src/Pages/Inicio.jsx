import React, { useState } from "react";
import "../Styles/Inicio.scss";
import Modal from "../Components/Modal"; // Importe o modal
import BancoDeDados from "../Components/BancoDeDados";
import { Link } from "react-router-dom";
import "../Styles/Input.scss";

const Inicio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consulta, setConsulta] = useState(""); // Estado para capturar o texto

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container-home">
      <div className="container-interno">
        <div className="textos">
          <h1>SQL Generator</h1>
          <p>
            SQL Generator é uma aplicação que ajuda a montar SQLs para
            executar nos clientes. Traz algumas consultas prontas e alguns
            recursos experimentais.
          </p>
        </div>

        <div className="informacoes">
          <div className="consultas" onClick={handleOpenModal}>
            Criar consultas personalizadas
          </div>
          <div className="consultas">Consultas prontas</div>
        </div>
        <div className="informacoes">
          <div className="consultas">Comparar valores / notas fiscais</div>
          <div className="consultas">Anotações</div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="sql">
          <h2>Criar Consulta</h2>
          <div className="input-container">
            <textarea
              id="input-sql"
              value={consulta}
              onChange={(e) => setConsulta(e.target.value)}
              placeholder="Digite sua consulta aqui..."
            />
          </div>
        </div>

        <div className="botao-container">
          <button type="submit" className="botao-consulta-personalizada">
            Salvar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Inicio;
