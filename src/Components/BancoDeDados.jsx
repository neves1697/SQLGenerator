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
                const response = await fetch('http://localhost:5000/tabelas');
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

    // Filtragem das tabelas
    const tabelasFiltradas = tabelas.filter((tabela) => 
        tabela.table_name.toLowerCase().includes(filtro.toLowerCase())
    );

    // Filtragem dos dados da tabela ControlePessoal
    const dadosFiltrados = dadosControlePessoal.filter((row) => {
        return Object.values(row).some(value => 
            value && value.toString().toLowerCase().includes(filtro.toLowerCase())
        );
    });

    return (
        <div className="bancoDeDados">
            <h1>Tabelas do Banco de Dados</h1>

            {/* Campo de pesquisa para filtrar tabelas */}
            <input 
                type="text" 
                className="filtro-input" 
                placeholder="Pesquisar tabelas..." 
                value={filtro} 
                onChange={(e) => setFiltro(e.target.value)} 
            />

            <ul>
                {tabelasFiltradas.map((tabela, index) => (
                    <li key={index}>{tabela.table_name}</li>
                ))}
            </ul>

            
        </div>
    );
};

export default BancoDeDados;
