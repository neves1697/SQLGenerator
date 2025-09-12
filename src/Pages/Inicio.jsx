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
          <h1>TREVO CRM</h1>
          <p>
            O TREVO CRM é uma aplicação web para facilitar armazenar consultas SQL, comparação de notas e valores e também fazer algumas anotações.
            Quem sabe, até possa ter um chatzinho aí para nós, usando IA? Não sei, quem sabe.
          </p>
        </div>

        <div className="informacoes">
          <div className="consultas" onClick={handleOpenModal}>
            Criar consultas personalizadas
          </div>
          <div className="consultas">Consultas salvas</div>
        </div>
        <div className="informacoes">
          <div className="consultas">Comparar valores / notas fiscais <br /> </div>
          <div className="consultas">Anotações</div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="sql">
          <h2>Criar Consulta</h2>
          <div className="input-titulo-criar-consulta">
            <h3>Descrição da consulta</h3>
            <input type="text" />
          </div>
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
