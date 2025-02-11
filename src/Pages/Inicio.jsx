import React, { useState } from "react";
import "../Styles/Inicio.scss";
import Modal from "../Components/Modal"; // Importe o modal
import BancoDeDados from "../Components/BancoDeDados";
import { Link } from "react-router-dom";
import "../Styles/Input.scss";

const Inicio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div className="container-home">
      <div className="container-interno">
        <div className="textos">
          <h1>SQL Generator</h1>
          <p>
            SQL Generator é uma aplicação que ajuda a montar SQLs para
            executar nos clientes. Traz algumas consultas prontas e alguns
            recursos experimentais
          </p>
        </div>

        <div className="informacoes">
          <div className="consultas" onClick={handleOpenModal}> {/* Adiciona o evento de clique */}
            Criar consultas personalizadas
          </div>
          <div className="consultas">
            Consultas prontas
          </div>
        </div>
        <div className="informacoes">
          <div className="consultas">
            Comparar valores / notas fiscais
          </div>
          <div className="consultas">
            Anotações
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="sql">
          Teste
          <input type="text" name="" id="input-sql"  />
          <button type="submit">
            Salvar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Inicio;
