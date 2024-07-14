import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import BotaoVoltarHomeProprietario from '../../components/BotoesPages/BotaoVoltarHomeProprietario';

function HomeMultas() {
  const { id } = useParams();
  const [proprietario, setProprietario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProprietario = async () => {
      try {
        const response = await fetch(`http://localhost:3000/proprietarios/${1}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar proprietário');
        }
        const data = await response.json();
        console.log('Dados do proprietário:', data); 
        setProprietario(data);
      } catch (error) {
        console.error(error); 
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProprietario();
  }, [id]);
  

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao buscar proprietário</p>;
  }

  return (
    <>
      <BotaoVoltarHomeProprietario/>

      <div>
        <h2 className={styles.h2}>Multas do {proprietario.nome}</h2>

        {/* Tabela de multas */}
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
            {proprietario.veiculos.map(veiculo => (
              veiculo.multas.map(multa => (
                <tr key={multa.id}>
                  <td>{multa.valor}</td>
                  <td>{multa.Data}</td>
                  <td>{multa.Pontos}</td>
                  <td>{multa.Tipo}</td>
                  <td>{multa.PlacaCarro}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HomeMultas;
