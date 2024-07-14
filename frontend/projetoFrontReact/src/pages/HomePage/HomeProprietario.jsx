import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import BotaoCriarProprietario from '../../components/BotoesPages/BotaoCriarProprietario';

function HomeProprietario() {
  const [proprietarios, setProprietarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProprietarios = async () => {
      try {
        const response = await fetch('http://localhost:3000/proprietarios');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setProprietarios(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProprietarios();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/proprietarios/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao deletar o proprietário');
      }
      // Atualiza o estado após a deleção
      setProprietarios(prevProprietarios =>
        prevProprietarios.filter(proprietario => proprietario.id !== id)
      );
    } catch (error) {
      setError(error.message);
    }
  };
  

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <div><BotaoCriarProprietario /></div>
      <h1 className={styles.h1}>Bem vindo ao Detran</h1>
      <h2 className={styles.h2}>Proprietários</h2>
      <div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cpf</th>
              <th>Categoria Cnh</th>
              <th>vencimento Cnh</th>
              <th>Veículos</th>
              <th>Multas</th>
              <th>Editar Motorista</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {proprietarios.map((proprietario) => (
              <tr key={proprietario.id}>
                <td>{proprietario.nome}</td>
                <td>{proprietario.cpf}</td>
                <td>{proprietario.categoriaCnh}</td>
                <td>{proprietario.vencimentoCnh}</td>
                
                <td><button>🚗</button></td>
                <td><button>📘</button></td>
                <td><button>✏️</button></td>
                <td>
                  <button onClick={() => handleDelete(proprietario.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default HomeProprietario;