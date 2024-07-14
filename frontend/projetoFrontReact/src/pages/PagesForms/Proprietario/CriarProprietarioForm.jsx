import React, { useState } from 'react';
import styles from './styles.module.css';
import BotaoCriarProprietario from '../../../components/BotaoSair/BotaoSairProprietario';
import BotaoCriar from '../../../components/BotoesForms/BotaoCriar';

function CriarProprietarioForm() {
    const [showModal, setShowModal] = useState(false);
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [categoriaCnh, setCategoriaCnh] = useState('');
    const [vencimentoCnh, setVencimentoCnh] = useState('');
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
                        <h1>Proprietário</h1>
                        <form onSubmit={handleSignupForm}>
                            <label>
                                <p>Nome:</p>
                                <input
                                    type="text"
                                    name="nome"
                                    required
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />
                            </label>
                            <br />

                            <label>
                                <p>CPF:</p>
                                <input
                                    type="text"
                                    name="cpf"
                                    required
                                    value={cpf}
                                    onChange={(event) => setCpf(event.target.value)}
                                />
                            </label>
                            <br />

                            <label>
                                <p>Categoria CNH:</p>
                                <input
                                    type="text"
                                    name="categoriaCnh"
                                    required
                                    value={categoriaCnh}
                                    onChange={(event) => setCategoriaCnh(event.target.value)}
                                />
                            </label>
                            <br />

                            <label>
                                <p>Vencimento CNH:</p>
                                <input
                                    type="text"
                                    name="vencimentoCnh"
                                    required
                                    value={vencimentoCnh}
                                    onChange={(event) => setVencimentoCnh(event.target.value)}
                                />
                            </label>
                            <br />

                            <button className={styles.buttonConfirm} type="submit" >
                                <BotaoCriar />
                            </button>
                            <BotaoCriarProprietario onClose={handleCloseModal} />
                        </form>

                        {error && <p className={styles.error}>{error}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CriarProprietarioForm;