const express = require('express');
const { Client } = require('pg');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files for HTML, CSS, and JS
app.use(express.static(path.join(__dirname)));

// Set up PostgreSQL client
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "30leite30",
    database: "pessoas"
});

client.connect();

// Route to fetch data
app.get('/alunos', async (req, res) => {
    try {
        const result = await client.query(`SELECT * FROM public.alunos`);
        res.json(result.rows);  // Send data as JSON
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error retrieving data");
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
