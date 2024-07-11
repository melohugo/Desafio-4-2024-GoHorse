import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function BotaoVoltarHomeVeiculo() {
  return (
    <header>
      <nav>
        <Link className={styles.buttonVoltar} to={'/HomeVeiculo'}>Voltar</Link>
      </nav>
    </header >
  );
}

export default BotaoVoltarHomeVeiculo;