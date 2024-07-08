/* Importação de Bibliotecas */
import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import BotaoCriar from './components/BotoesPages/BotaoCriar';
import './index.css'; {/* CSS global */ }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Página inicial */}
    <HomePage />
    {/* Componentes react */}
    <BotaoCriar />

  </React.StrictMode>,
)
