import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './styles.module.css';
import BotaoVoltarHomeProprietario from '../../components/BotoesPages/BotaoVoltarHomeProprietario';
import BotaoCriarVeiculo from '../../components/BotoesPages/BotaoCriarVeiculo';

function HomeVeiculo() {
  const { cpf } = useParams();
  const [proprietario, setProprietario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProprietario = async () => {
      try {
        const response = await fetch(`http://localhost:3000/veiculo/${cpf}`); 
        if (!response.ok) {
          throw new Error('Erro ao buscar proprietário');
        }
        const data = await response.json();
        setProprietario(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProprietario();
  }, [cpf]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <BotaoCriarVeiculo />
      <BotaoVoltarHomeProprietario />

      <div>
        {proprietario && (
          <>
            <h2 className={styles.h2}>Veículos do {proprietario.nome}</h2>

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
                {proprietario.veiculos.map((veiculo) => (
                  <tr key={veiculo.cpf}>
                    <td>{veiculo.placa}</td>
                    <td>{veiculo.marca}</td>
                    <td>{veiculo.modelo}</td>
                    <td>{veiculo.ano}</td>
                    <td>{veiculo.cor}</td>
                    <td><Link to={`/multas/${veiculo.cpf}`}>📘</Link></td> 
                    <td>
                      <button>✏️</button> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
}

export default HomeVeiculo;
