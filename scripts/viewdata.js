const fs = require('fs');

function getViewData(callback) {
    // Read the JSON file
    fs.readFile('./data/country.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return callback(err, null);
        }

        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);
            // Extract required data from JSON
            const countries = jsonData.country.map(item => ({
                name: item.name,
                capital: item["@capital"],
                memberships: item["@memberships"],
                gdp_total: item.gdp_total,
                inflation: item.inflation,
                unemployment: item.unemployment,
                government: item.government
            }));
            callback(null, countries);
        } catch (error) {
            console.error('Error parsing JSON data:', error);
            callback(error, null);
        }
    });
}

module.exports = getViewData;
