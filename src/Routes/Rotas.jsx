import React from "react";
import Consultas from "../Pages/Consultas";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from "../Pages/Inicio";

const Rotas = () => {
    return <>
        <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/consultas" element={<Consultas />} />
        </Routes>
    </>
}

export default Rotas;