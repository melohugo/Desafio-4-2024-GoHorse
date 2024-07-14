import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function BotaoCriarVeiculo() {
  const navigate = useNavigate();
  
  const handleConfirmExit = () => {
    navigate('/VeiculoForm'); 
  };

  return (
    <>
      <button className={styles.buttonCriar} onClick={handleConfirmExit}>Criar</button>
    </>
  );
}
export default BotaoCriarVeiculo;

