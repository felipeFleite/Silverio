import React, { useEffect, useState } from 'react';
import './style.css';

const PessoasTabela = () => {
    const [alunos, setAlunos] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar dados');
                }
                return response.json();
            })
            .then(data => {
                setAlunos(data);

                if (data.length > 0) {
                    setColumns(Object.keys(data[0]));
                }
            })
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    return (
        <div>
            <h1>Pessoas</h1>
            <table className="alunos-table">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno, index) => (
                        <tr key={index}>
                            {columns.map(column => (
                                <td key={column}>{aluno[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PessoasTabela;
