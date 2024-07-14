import React, { useState } from 'react';
import styles from './styles.module.css';
import BotaoSairVeiculo from '../../../components/BotaoSair/BotaoSairVeiculo';
import BotaoCriarVeiculo from '../../../components/BotoesPages/BotaoCriarVeiculo';
import BotaoCriar from '../../../components/BotoesForms/BotaoCriar';

function VeiculoForm() {
    const [Placa, setPlaca] = useState('');
    const [Marca, setMarca] = useState('');
    const [Modelo, setModelo] = useState('');
    const [Ano, setAno] = useState('');
    const [Cor, setCor] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSignupForm = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        console.log({ nome, cpf, categoriaCnh, vencimentoCnh });

        try {
            const response = await fetch('http://localhost:3000/proprietarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nome,
                    cpf,
                    categoriaCnh,
                    vencimentoCnh,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao salvar os dados');
            }

            const data = await response.json();
            console.log('Dados salvos:', data);

            // Limpar formulário após o envio bem-sucedido
            setNome('');
            setCpf('');
            setCategoriaCnh('');
            setVencimentoCnh('');

            // Fechar modal ou realizar outras ações necessárias
            handleCloseModal();

            // Exibir mensagem de sucesso para o usuário
            alert('Dados salvos com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar dados para a API:', error);
            setError('Erro ao salvar os dados. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h1>Veículo do []</h1>
                        <form onSubmit={handleSignupForm}>
                            <label>
                                <p>Placa:</p>
                                <input type="text" name="Placa" required value={Placa} onChange={(event) => setPlaca(event.target.value)} />
                            </label>
                            <br />
                            <label>
                                <p>Marca:</p>
                                <input type="text" name="Marca" required value={Marca} onChange={(event) => setMarca(event.target.value)} />
                            </label>
                            <br />
                            <label>
                                <p>Modelo:</p>
                                <input type="text" name="Modelo" required value={Modelo} onChange={(event) => setModelo(event.target.value)} />
                            </label>
                            <br />
                            <label>
                                <p>Ano:</p>
                                <input type="text" name="Ano" required value={Ano} onChange={(event) => setAno(event.target.value)} />
                            </label>
                            <br />
                            <label>
                                <p>Cor:</p>
                                <input type="text" name="Cor" required value={Cor} onChange={(event) => setCor(event.target.value)} />
                            </label>
                            <button className={styles.buttonConfirm} type="submit">
                                <BotaoCriar />
                                <BotaoCriarVeiculo onClose={handleCloseModal} />
                            </button>
                            <BotaoSairVeiculo/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VeiculoForm;