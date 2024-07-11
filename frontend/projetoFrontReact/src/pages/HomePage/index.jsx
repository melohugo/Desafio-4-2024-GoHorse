import React from 'react';
import styles from './styles.module.css';

function HomePage() {
  return (
    <>
      <div><h1 className={styles.h1}>Bem vindo ao detran</h1></div>
      <div><h2 className={styles.h2}>Proprietários</h2></div>

      <div>
        <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cpf</th>
            <th>Categoria CNH</th>
            <th>Vencimento CNH</th>
            <th>Veículos</th>
            <th>Multas</th>
            <th>Editar Motorista</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>aristeu motorista</td>
            <td>99999999999</td>
            <td>B</td>
            <td>30/12/2028</td>
            <td>🚗</td>
            <td>📘</td>
            <td>✏️</td>
          </tr>
          <tr>
            <td>aristeu motociclista</td>
            <td>99999999999</td>
            <td>A</td>
            <td>30/12/2028</td>
            <td>🚗</td>
            <td>📘</td>
            <td>✏️</td>
          </tr>
          <tr>
            <td>dona aristeia</td>
            <td>99999999999</td>
            <td>B</td>
            <td>30/12/2028</td>
            <td>🚗</td>
            <td>📘</td>
            <td>✏️</td>
          </tr>
          <tr>
            <td>sr aristeu</td>
            <td>99999999999</td>
            <td>B</td>
            <td>30/12/2028</td>
            <td>🚗</td>
            <td>📘</td>
            <td>✏️</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </>
  );
}

export default HomePage;
