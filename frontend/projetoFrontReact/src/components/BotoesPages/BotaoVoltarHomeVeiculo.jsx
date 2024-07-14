import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function BotaoVoltarHomeVeiculo() {

  const navigate = useNavigate();
  const handleConfirmExit = () => {
    navigate('/HomeVeiculo'); 
  };

  return (
    <>
      <button className={styles.buttonVoltar} onClick={handleConfirmExit}>Voltar</button>
    </>
  );
}

export default BotaoVoltarHomeVeiculo;
