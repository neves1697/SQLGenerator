import React, { useEffect, useState } from "react";

const BancoDeDados = () => {
    const [tabelas, setTabelas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

        fetchTabelas();
    }, []);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div>
            <h1>Tabelas do Banco de Dados</h1>
            <ul>
                {tabelas.map((tabela, index) => (
                    <li key={index}>{tabela[`Tables_in_seu_banco_de_dados`]}</li>
                ))}
            </ul>
        </div>
    );
};

export default BancoDeDados;
