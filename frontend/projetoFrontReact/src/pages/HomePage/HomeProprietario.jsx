import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import styles from './styles.module.css';
import BotaoCriarProprietario from '../../components/BotoesPages/BotaoCriarProprietario';
import BotaoSalvar from '../../components/BotoesForms/BotaoSalvar';

function HomeProprietario() {
  const [proprietarios, setProprietarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingCpf, setEditingCpf] = useState(null); 
  const [editFormData, setEditFormData] = useState({
    nome: '',
    cpf: '',
    categoriaCnh: '',
    vencimentoCnh: '',
  });

  useEffect(() => {
    const fetchProprietarios = async () => {
      try {
        const response = await fetch('http://localhost:3000/proprietario/proprietarios');
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

  const handleDelete = async (cpf) => {
    try {
      const response = await fetch(`http://localhost:3000/proprietario/deletar/${cpf}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao deletar o proprietário');
      }
      setProprietarios(prevProprietarios =>
        prevProprietarios.filter(proprietario => proprietario.cpf !== cpf)
      );
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (proprietario) => {
    setEditingcpf(proprietario.cpf);
    setEditFormData({
      nome: proprietario.nome,
      cpf: proprietario.cpf,
      categoriaCnh: proprietario.categoriaCnh,
      vencimentoCnh: proprietario.vencimentoCnh,
    });
  };

  const handleSaveEdit = async (cpf) => {
    try {
      const response = await fetch(`http://localhost:3000/proprietario/editar/${cpf}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar o proprietário');
      }
      setProprietarios(proprietarios.map(proprietario =>
        proprietario.cpf === cpf ? { ...proprietario, ...editFormData } : proprietario
      ));
      setEditingcpf(null);
      setEditFormData({
        nome: '',
        cpf: '',
        categoriaCnh: '',
        vencimentoCnh: '',
      });
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
              <th>Vencimento Cnh</th>
              <th>Veículos</th>
              <th>Multas</th>
              <th>Editar Motorista</th>
              <th>Deletar</th>
            </tr>
          </thead>
          <tbody>
            {proprietarios.map((proprietario) => (
              <tr key={proprietario.cpf}>
                <td>{editingcpf === proprietario.cpf ? (
                  <input
                    type="text"
                    value={editFormData.nome}
                    onChange={(e) => setEditFormData({ ...editFormData, nome: e.target.value })}
                  />
                ) : (
                  proprietario.nome
                )}</td>
                <td>{editingcpf === proprietario.cpf ? (
                  <input
                    type="text"
                    value={editFormData.cpf}
                    onChange={(e) => setEditFormData({ ...editFormData, cpf: e.target.value })}
                  />
                ) : (
                  proprietario.cpf
                )}</td>
                <td>{editingcpf === proprietario.cpf ? (
                  <input
                    type="text"
                    value={editFormData.categoriaCnh}
                    onChange={(e) => setEditFormData({ ...editFormData, categoriaCnh: e.target.value })}
                  />
                ) : (
                  proprietario.categoriaCnh
                )}</td>
                <td>{editingcpf === proprietario.cpf ? (
                  <input
                    type="text"
                    value={editFormData.vencimentoCnh}
                    onChange={(e) => setEditFormData({ ...editFormData, vencimentoCnh: e.target.value })} 
                  />
                ) : (
                  proprietario.vencimentoCnh
                )}</td>
                <td><button><Link to={`/veiculos/${proprietario.cpf}`}>🚗</Link></button></td> 
                <td><button><Link to={`/multas/${proprietario.cpf}`}>📘</Link></button></td>

                {/* Editar */}
                <td>{editingcpf === proprietario.cpf ? (
                  <button className={styles.buttonSalvar} onClick={() => handleSaveEdit(proprietario.cpf)}><BotaoSalvar /></button>
                ) : (
                  <button onClick={() => handleEdit(proprietario)}>✏️</button>
                )}</td>

                <td>
                  <button onClick={() => handleDelete(proprietario.cpf)}>🗑️</button>
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
