const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000; // Altere de 3306 para 5000

app.use(cors()); // Permite requisições de outros domínios

// Configurações do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'controlepessoal',
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota para obter as tabelas
app.get('/tabelas', (req, res) => {
    db.query("SHOW TABLES", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
