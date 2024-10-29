const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Habilitar CORS para permitir requisições do React
app.use(cors());

// Configurar o cliente PostgreSQL
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "30leite30",
    database: "pessoas"
});

client.connect();

// Rota para buscar dados
app.get('/alunos', async (req, res) => {
    try {
        const result = await client.query(`SELECT * FROM public.alunos`);
        res.json(result.rows);  // Enviar os dados como JSON
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Erro ao recuperar dados");
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
