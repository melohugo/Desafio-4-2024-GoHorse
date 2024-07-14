import React from 'react';
import styles from './styles.module.css';
import BotaoVoltarHomeProprietario from '../../components/BotoesPages/BotaoVoltarHomeProprietario';
import BotaoCriarVeiculo from '../../components/BotoesPages/BotaoCriarVeiculo';

function HomeVeiculo() {
  return (
    <>
    <BotaoCriarVeiculo/>
    <BotaoVoltarHomeProprietario/>

      <div>
      <h2 className={styles.h2}>Veículos do []</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Cor</th>
              <th>Multas</th>
              <th>Editar Motorista</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dona aristeia</td>
              <td>Fiat</td>
              <td>Palio</td>
              <td>2010</td>
              <td>Branco</td>
              <td><button>📘</button></td>
              <td><button>✏️</button></td>
            </tr>
            <tr>
              <td>sr aristeu</td>
              <td>Fiat</td>
              <td>Palio</td>
              <td>32010</td>
              <td>Branco</td>
              <td><button>📘</button></td>
              <td><button>✏️</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HomeVeiculo;