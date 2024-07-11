import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable'; 
import styles from './styles.module.css';

function BotaoSairProprietario() {
  // Declaração de um estado para controlar a visibilidade do modal
  const [showModal, setShowModal] = useState(false);
  // Hook do React Router para navegar entre as rotas
  const navigate = useNavigate();

  // Função para abrir o modal de confirmação
  const handleOpenModal = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do botão de recarregar a página
    setShowModal(true); // Define o estado showModal como true para exibir o modal
  };

  // Função para fechar o modal de confirmação
  const handleCloseModal = () => {
    setShowModal(false); // Define o estado showModal como false para esconder o modal
  };

  // Função para confirmar a saída e redirecionar para a página inicial
  const handleConfirmExit = () => {
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <>
      {/* Botão para abrir o modal de confirmação */}
      <button className={styles.buttonSair} onClick={handleOpenModal}>X</button>

      {/* Renderiza o modal de confirmação apenas se showModal for true */}
      {showModal && (
        <Draggable>
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2>Confirmação</h2>
              <p>Você tem certeza que deseja sair?</p>

              {/* Botão para confirmar a saída */}
              <button className={styles.confirmButton} onClick={handleConfirmExit}>Sim</button>

              {/* Botão para cancelar a ação de saída e fechar o modal */}
              <button className={styles.cancelButton} onClick={handleCloseModal}>Não</button>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
}

export default BotaoSairProprietario;
