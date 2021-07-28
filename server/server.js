console.log('Look ma, my first express app!');

const { text } = require('express');
//Load the express libary
//from node_modules/express
const express = require('express');

// create our "app" (Server)
const app = express();
const quotes = [
    {
        text: 'Debugging is like being the detective in a crime movie where you are also the murdurer',
        author: 'Filipe Fortes'
    },
    {
        text: 'If you want to increase your success rate, double your failure rate',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
];

//Tell express where to find all 
// of our "public" files 
// aka "Client-side" files
// aka "Static assets"
app.use(express.static('./server/public'));

// Listen for requests coming to a specfic URL: http://localhost:5000/quotes
app.get('/quotes', function(req, res) {
    console.log('Ready to send back some quotes');
    console.log('request.route.path is', req.route.path);

    // Send back data to the client
    // array of quotes objects
    res.send([quotes]);
});

//Listen for Requests
const port = 5000;
app.listen(port, function() {
// kind of like our onReady function
console.log('App is up and Running');
});
