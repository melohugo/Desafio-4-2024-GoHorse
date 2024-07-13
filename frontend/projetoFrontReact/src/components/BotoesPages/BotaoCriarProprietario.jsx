import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function BotaoCriarProprietario() {
  const navigate = useNavigate();

  const handleConfirmExit = () => {
    navigate('/CriarProprietarioForm'); 
  };

  return (
    <>
      <button className={styles.buttonCriar} onClick={handleConfirmExit}>Criar</button>
    </>
  );
}

export default BotaoCriarProprietario;
