import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function BotaoCriarVeiculo() {
  return (
    <header>
      <nav>
      {/* Chama a pagina CriarProprietario quando clicado */}
        <Link className={styles.buttonCriar} to={'/VeiculoForm'}>Criar</Link>
      </nav>
    </header >
  );
}
export default BotaoCriarVeiculo;

