import React from 'react';
import "../Styles/Modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {children} {/* Exibe o conteúdo passado para o Modal */}
      </div>
    </div>
  );
};

export default Modal;
