import { BrowserRouter, Route, Routes } from "react-router-dom";
/* ctrl + space importa a pagina */
import HomeProprietario from "./pages/HomePage/HomeProprietario";
import HomeVeiculo from "./pages/VeiculosPage/HomeVeiculo";
import HomeMultas from "./pages/MultasPage/HomeMultas";
import CriarProprietarioForm from "./pages/PagesForms/Proprietario/CriarProprietarioForm";
import VeiculoForm from "./pages/PagesForms/veiculos/VeiculoForm";

function AppRoutes() {
    return (
        /* Navegador entre rotas */
        <BrowserRouter>
            {/* Lista de rotas */}
            <Routes>
               {/* Cada rota */}
                <Route path="/" element={<HomeProprietario />} />
                <Route path="/CriarProprietarioForm" element={<CriarProprietarioForm />} />
                <Route path="/veiculos/:proprietarioId" element={<HomeVeiculo />} />
                <Route path="/multas/:veiculoId" element={<HomeMultas/>} />
                <Route path="/veiculos/:id" component={HomeVeiculo} />
                <Route path="/HomeVeiculo" element={<HomeVeiculo />} />
                <Route path="/VeiculoForm" element={<VeiculoForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
