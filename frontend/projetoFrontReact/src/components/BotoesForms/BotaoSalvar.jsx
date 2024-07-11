import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function BotaoSalvar() {
  return (
    /* Arrumar este botão para que ele salve todas as informações, agora ele volta para a Home */ 
    < Link className = { styles.buttonSalvar }  to = { '/'} > Salvar</Link >
  );
}

export default BotaoSalvar;
