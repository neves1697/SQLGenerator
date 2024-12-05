const express = require('express');
const { Pool } = require('pg');  // Usando a biblioteca pg para PostgreSQL
const cors = require('cors');

const app = express();
    const port = 5000;

    app.use(cors()); // Permite requisições de outros domínios

    // Configurações do banco de dados PostgreSQL
    const pool = new Pool({
        host: 'pgsql04.datacoper.com.br',
        user: 'crmdesenv',
        password: 'bi*2017',
        database: 'cmdb_anderson.neves', 
        port: 5435, 
    });

    // Verifica se a conexão ao banco de dados está funcionando
    pool.on('connect', () => {
        console.log('Conectado ao banco de dados PostgreSQL');
    });

    pool.on('error', (err, client) => {
        console.error('Erro na conexão ao banco de dados PostgreSQL', err);
    });

// Rota para obter as tabelas
app.get('/tabelas', async (req, res) => {
    try {
        // Filtro para tabelas no esquema 'public' que começam com 'user_'
        const result = await pool.query(`
            SELECT 
            table_name 
            FROM information_schema.tables order by table_name `);  // Exemplo: tabelas com prefixo 'user_'
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao consultar tabelas', err);
        res.status(500).json({ error: err.message });
    }
});

// Nova Rota para consultar os dados da tabela 'usuario'
app.get('/usuarios', async (req, res) => {
    try {
        // Consulta todos os registros da tabela 'usuario'
        const result = await pool.query('SELECT * FROM usuario');

        // Se houverem dados, envia os dados como resposta em formato JSON
        res.json(result.rows);
    } catch (err) {
        // Caso ocorra algum erro durante a consulta, retorna o erro com status 500
        console.error('Erro ao consultar dados da tabela usuario', err);
        res.status(500).json({ error: err.message });
    }
});

// Iniciar o servidor na porta 5000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
