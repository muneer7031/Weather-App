const fs = require('fs');

function getAllData(callback) {
    // Read the JSON file
    fs.readFile('./data/country.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            callback(err, null);
            return;
        }

        try {
            // Parse the JSON data
            const jsonData = JSON.parse(data);
            // Ensure jsonData is an array
            if (!Array.isArray(jsonData.country)) {
                throw new Error('Data is not in the correct format');
            }
            callback(null, jsonData.country); // Pass only the array of countries
        } catch (error) {
            console.error('Error parsing JSON data:', error);
            callback(error, null);
        }
    });
}

module.exports = getAllData;
