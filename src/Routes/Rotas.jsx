import React from "react";
import Consultas from "../Pages/Consultas";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from "../Pages/Inicio";
import BancoDeDados from "../Components/BancoDeDados";

const Rotas = () => {

    const banco = {
        url: "http://localhost:5000/tabelas"
    }

    return <>
        <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/consultas" element={<Consultas />} />
            <Route path="/database" element={<BancoDeDados />} />
        </Routes>
    </>
}

export default Rotas;