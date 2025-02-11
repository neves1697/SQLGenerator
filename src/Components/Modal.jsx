import React from 'react';
import "../Styles/Modal.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }) => {
  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return <>
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <IoMdCloseCircleOutline size={30} color='white' />          
        </button>
        {children} {/* Exibe o conteúdo passado para o Modal */}
      </div>
    </div>
  </>
};

export default Modal;
