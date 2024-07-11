import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function BotaoCriarProprietario() {
  return (
    <header>
      <nav>
      {/* Chama a pagina CriarProprietario quando clicado */}
        <Link className={styles.buttonCriar} to={'/CriarProprietarioForm'}>Criar</Link>
      </nav>
    </header >
  );
}
export default BotaoCriarProprietario;

