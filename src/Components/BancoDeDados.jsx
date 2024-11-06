import React, { useEffect, useState } from "react";
import "../Styles/BancoDados.scss";

const BancoDeDados = () => {
    const [tabelas, setTabelas] = useState([]);
    const [dadosControlePessoal, setDadosControlePessoal] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        const fetchTabelas = async () => {
            try {
                const response = await fetch('http://localhost:5000/tabelas');
                if (!response.ok) {
                    throw new Error('Erro ao buscar as tabelas');
                }
                const data = await response.json();
                setTabelas(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchDadosControlePessoal = async () => {
            try {
                const response = await fetch('http://localhost:5000/controlepessoal');
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados de controlepessoal');
                }
                const data = await response.json();
                setDadosControlePessoal(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchTabelas();
        fetchDadosControlePessoal();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    // Filtragem dos dados
    const dadosFiltrados = dadosControlePessoal.filter((row) => {
        return Object.values(row).some(value => 
            value && value.toString().toLowerCase().includes(filtro.toLowerCase())
        );
    });

    return (
        <div className="bancoDeDados">
            <h1>Tabelas do Banco de Dados</h1>
            <ul>
                {tabelas.map((tabela, index) => (
                    <li key={index}>{tabela[`Tables_in_controlepessoal`]}</li>
                ))}
            </ul>

            <h1>Dados da Tabela ControlePessoal</h1>
            <input 
                type="text" 
                className="filtro-input" 
                placeholder="Filtrar dados..." 
                value={filtro} 
                onChange={(e) => setFiltro(e.target.value)} 
            />
            <table>
                <thead>
                    <tr>
                        {dadosControlePessoal.length > 0 &&
                            Object.keys(dadosControlePessoal[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {dadosFiltrados.map((row, index) => (
                        <tr key={index}>
                            {Object.values(row).map((value, idx) => (
                                <td key={idx}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BancoDeDados;
