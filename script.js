// Fetch data from the Express server and populate the table
fetch('/alunos')
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById('alunos-table');

        // Check if there is data and create the table header based on the keys (columns) of the first row
        if (data.length > 0) {
            const headerRow = table.insertRow();
            Object.keys(data[0]).forEach(column => {
                const th = document.createElement('th');
                th.textContent = column;
                headerRow.appendChild(th);
            });

            // Insert each row of data into the table
            data.forEach(row => {
                const newRow = table.insertRow();
                Object.values(row).forEach(value => {
                    const cell = newRow.insertCell();
                    cell.textContent = value;
                });
            });
        }
    })
    .catch(error => console.error('Error fetching data:', error));
