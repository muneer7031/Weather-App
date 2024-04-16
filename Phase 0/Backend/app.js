const express = require('express');
const path = require('path');
const hbs= require('hbs')
const app = express();
const port = process.env.PORT || 8080;
const getAllData = require('./scripts/allData');
const getViewData = require('./scripts/viewdata');
const https = require('https');


// Set up handlebars engine
app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');
app.use(express.static(path.join(__dirname, '../Frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));;
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

// const express = require('express');
// const getViewData = require('./viewdata.js');
// const app = express();

app.get('/viewdata', (req, res) => { // Change the route path to /viewdata
    getViewData((err, data) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Error fetching data');
        } else {
            res.render('viewdata', { data: data }); // Pass data to template
        }
    });
});

// Route to render greetuser.html
app.get('/greetuser', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend', 'greetuser.html'));
});


app.get('/weather', (req, res) => {
    // Define options for the HTTP request
    const options = {
        method: 'GET',
        hostname: 'weatherapi-com.p.rapidapi.com',
        port: null,
        path: '/current.json?q=53.1%2C-0.13',
        headers: {
            'X-RapidAPI-Key': 'ba842ffc14msh606eb0f2bd72301p1cc065jsn7d0fb3871e3d',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    // Make the HTTP request
    const weatherReq = https.request(options, (response) => {
        let data = '';

        // Collect data as it comes in
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Once all data is received, send it back to the client
        response.on('end', () => {
            const weatherData = JSON.parse(data);
            res.json(weatherData); // Send weather data as JSON
        });
    });

    // Handle errors
    weatherReq.on('error', (error) => {
        console.error(error);
        res.status(500).send('An error occurred while fetching weather data');
    });

    // End the request
    weatherReq.end();
});








// app.get('/iphone', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Frontend', 'iphone.html'));
// });


// Route to fetch all data and render using template engine
// app.get('/viewdata', (req, res) => {
//     getViewData((err, data) => {
//         if (err) {
//             res.status(500).send('Internal Server Error');
//             return;
//         }
//         res.render('viewdata', { countries: data }); // Pass 'countries' object to the template
//     });
// });











// app.get('/exchange', (req, res) => {
//     const options = {
//         method: 'GET',
//         hostname: 'currency-exchange.p.rapidapi.com',
//         port: null,
//         path: '/exchange?from=SGD&to=MYR&q=1.0',
//         headers: {
//             'X-RapidAPI-Key': 'ba842ffc14msh606eb0f2bd72301p1cc065jsn7d0fb3871e3d',
//             'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
//         }
//     };

//     const reqApi = https.request(options, function (response) {
//         const chunks = [];

//         response.on('data', function (chunk) {
//             chunks.push(chunk);
//         });

//         response.on('end', function () {
//             const body = Buffer.concat(chunks);
//             res.send(body.toString());
//         });
//     });

//     reqApi.on('error', function (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     });

//     reqApi.end();
// });












app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
















// const express = require('express');
// const path = require('path');
// const hbs = require('hbs');
// const app = express();
// const port = process.env.PORT || 8080;

// // Set up handlebars engine
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, '/views'));
// app.use(express.static(path.join(__dirname, '../Frontend')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../Frontend', 'index.html'));
// });

// // Route to render greetuser.html
// app.get('/greetuser', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Frontend', 'greetuser.html'));
// });

// app.get('/iphone', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Frontend', 'iphone.html'));
// });

//  app.get('/viewdata', (req, res) => { // Change the route path to /viewdata
//      getViewData((err, data) => {
//          if (err) {
//              console.error('Error fetching data:', err);
//              res.status(500).send('Error fetching data');
//          } else {
//              res.render('viewdata', { data: data }); // Pass data to template
//          }
//      });
//  });

//  // Route to fetch all data
//  app.get('/alldata', (req, res) => {
//      getAllData((err, data) => {
//          if (err) {
//              res.status(500).send('Internal Server Error');
//              return;
//          }
//          res.json(data); // Send JSON response
//      });
//  });



// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
