// const express = require('express');
// const path = require('path');
// const hbs= require('hbs')
// const app = express();
// const port = process.env.PORT || 8080;
// const getAllData = require('./scripts/allData');
// const getViewData = require('./scripts/viewdata');

// // Set up handlebars engine
// app.set('view engine', 'hbs');
// app.set('views',__dirname + '/views');
// app.use(express.static(path.join(__dirname, '../Frontend')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));;
// });

// // Route to fetch all data
// app.get('/alldata', (req, res) => {
//     getAllData((err, data) => {
//         if (err) {
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         res.json(data); // Send JSON response
//     });
// });

// // const express = require('express');
// // const getViewData = require('./viewdata.js');
// // const app = express();

// app.get('/viewdata', (req, res) => { // Change the route path to /viewdata
//     getViewData((err, data) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             res.status(500).send('Error fetching data');
//         } else {
//             res.render('viewdata', { data: data }); // Pass data to template
//         }
//     });
// });



// // Route to fetch all data and render using template engine
// // app.get('/viewdata', (req, res) => {
// //     getViewData((err, data) => {
// //         if (err) {
// //             res.status(500).send('Internal Server Error');
// //             return;
// //         }
// //         res.render('viewdata', { countries: data }); // Pass 'countries' object to the template
// //     });
// // });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
















const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8080;

// Set up handlebars engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '../Frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
});

// Route to render greetuser.html
app.get('/greetuser', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'greetuser.html'));
});

app.get('/iphone', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'iphone.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
