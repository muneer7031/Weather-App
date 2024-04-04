// getGDP.js
function generateGDPTable() {
    try {
        const jsonData = require('../data/country.json');
        let tableHTML = '<table border="1"><tr><th>Country name</th><th>Capital</th><th>Unemployment</th><th>Total GDP</th></tr>';

        // Loop over each country's data and generate table rows
        for (const country of jsonData.country) {
            tableHTML += `<tr><td>${country.name}</td><td>${country["@capital"]}</td><td>${country.unemployment}</td><td>${country.gdp_total}</td></tr>`;
        }

        tableHTML += '</table>';

        return tableHTML;
    } catch (error) {
        console.error('Error parsing JSON data:', error);
        return ''; // or handle error in some other way
    }
}

module.exports = generateGDPTable;
