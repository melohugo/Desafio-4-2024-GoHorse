import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function BotaoVoltarHomeProprietario() {
  return (
    <header>
      <nav>
        <Link className={styles.buttonVoltar} to={'/'}>Voltar</Link>
      </nav>
    </header >
  );
}

export default BotaoVoltarHomeProprietario;