import React from 'react';
import styles from './styles.module.css';
import BotaoVoltarHomeVeiculo from '../../components/BotoesPages/BotaoVoltarHomeVeiculo';

function HomeMultas() {
  return (
    <>
    <BotaoVoltarHomeVeiculo/>

      <div>
      <h2 className={styles.h2}>Multas do []</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Valor</th>
              <th>Data</th>
              <th>Pontos</th>
              <th>Tipo</th>
              <th>Placa Carro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dona aristeia</td>
              <td>Fiat</td>
              <td>Palio</td>
              <td>2010</td>
              <td>Branco</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HomeMultas;