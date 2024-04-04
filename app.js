const express = require('express');
const exphbs  = require('express-handlebars');
const hbs= require('hbs')
const app = express();
const port = 8080;
const getAllData = require('./scripts/allData');
const getViewData = require('./scripts/viewdata');

// Set up handlebars engine
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

// Route to fetch all data
app.get('/alldata', (req, res) => {
    getAllData((err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(data); // Send JSON response
    });
});

// Route to fetch all data and render using template engine
app.get('/viewdata', (req, res) => {
    getViewData((err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.render('viewdata', { countries: data }); // Pass 'countries' object to the template
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
