import React from 'react';
import styles from './styles.module.css';
import BotaoSair from '../../../../components/BotaoSair/BotaoSair';
import BotaoSalvar from '../../../../components/BotoesForms/BotaoSalvar';

function CriarProprietarioForm() {
    return (
        <>

            <div className={styles.conteiner}>
                <h1>Proprietário</h1>
                <form>
                    <label>
                    <p>Nome:</p>
                        <input type="text" name="nome" />
                    </label>
                    <br />

                    <label>
                    <p> CPF:</p>
                        <input type="text" name="cpf" />
                    </label>
                    <br />

                    <label>
                    <p>Categoria cnh:</p>
                        <input type="text" name="Categoria cnh:" />
                    </label>
                    <br />

                    <label>
                        <p>Vencimento CNH:</p>
                        <input type="text" name="Vencimento cnh:" />
                    </label>
                    <br />
                    
                    <BotaoSalvar />
                    <BotaoSair />

                </form>
            </div>
        </>
    );
}
export default CriarProprietarioForm;
