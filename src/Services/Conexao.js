const express = require('express');
const { Pool } = require('pg');  // Usando a biblioteca pg para PostgreSQL
const cors = require('cors');

function Conectar() {
    const app = express();
    const port = 5000;

    app.use(cors()); // Permite requisições de outros domínios

    // Configurações do banco de dados PostgreSQL
    const pool = new Pool({
        host: 'pgsql04.datacoper.com.br',
        user: 'crmdesenv',
        password: 'bi*2017',
        database: 'cmdb_anderson.neves',  // Verifique o nome correto do banco
        port: 5435,  // Use a porta correta (5435 ou 5432)
    });

    // Verifica se a conexão ao banco de dados está funcionando
    pool.on('connect', () => {
        console.log('Conectado ao banco de dados PostgreSQL');
    });

    pool.on('error', (err, client) => {
        console.error('Erro na conexão ao banco de dados PostgreSQL', err);
    });
}

export default Conectar;