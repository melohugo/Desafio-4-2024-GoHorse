import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function BotaoSair() {
  return (
    /* Este botão só vai para a page de HomeProprietario */
    <Link className={styles.buttonSair}  to={'/'}>X</Link>
  );
}
export default BotaoSair;