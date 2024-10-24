const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "30leite30",
    database: "pessoas"
}) 

client.connect()

client.query(`SELECT * FROM public.alunos`, (error, res) => {
    if(!error) {
        console.log(res.rows)
    }else{
        console.log(error.message)
    }
    client.end()
})
