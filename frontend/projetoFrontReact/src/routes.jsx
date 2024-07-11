import { BrowserRouter, Route, Routes } from "react-router-dom";
/* ctrl + space importa a pagina */
import HomeProprietario from "./pages/HomePage/HomeProprietario";
import HomeVeiculo from "./pages/VeiculosPage/HomeVeiculo";
import VeiculoForm from "./pages/PagesForms/veiculos/VeiculoForm";
import CriarProprietarioForm from "./pages/PagesForms/Proprietario/CriarProprietario/CriarProprietarioForm";
import HomeMultas from "./pages/MultasPage/HomeMultas";

function AppRoutes() {
    return (
        /* Navegador entre rotas */
        <BrowserRouter>
            {/* Lista de rotas */}
            <Routes>
               {/* Cada rota */}
                <Route path="/" element={<HomeProprietario />}></Route>
                <Route path="/CriarProprietarioForm" element={<CriarProprietarioForm />}></Route>
                
                {/* Estas rotas são para testar as paginas de veiculos e Mutas */}
                <Route path="/HomeVeiculo" element={<HomeVeiculo />}></Route>
                <Route path="/VeiculoForm" element={<VeiculoForm />}></Route>
                <Route path="/HomeMultas" element={<HomeMultas />}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;