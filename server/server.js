console.log('Look ma, my first express app!');

const { text } = require('express');
//Load the express libary
//from node_modules/express
const express = require('express');
// loaf the body parser module
const bodyParser = require('body-Parser');

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

//Setup body parser
//Tells express how to read data from the client
// either as JSON, or url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Listen for requests coming to a specfic URL: http://localhost:5000/quotes
app.get('/quotes', (req, res) => {
    console.log('Ready to send back some quotes');
    console.log('request.route.path is', req.route.path);

    // Send back data to the client
    // array of quotes objects
    res.send(quotes);
});

app.post('/quotes', (req,res) => {
    console.log('woo hoom we got a new quote');

    // Body parser gives us req.body
    console.log('req.body', req.body);
    let newQuote = req.body;

if (!newQuote.author || !newQuote.text) {
    // Set status code to 400 (client messed up)
    // and send back a useful message in the response body
    res.status(400).send({
        message: "Missing a reported field! Try again, and try harder."
    });
    // End the function!
    // Otherwise, we'll end up being bad
    return;
}
    quotes.push(newQuote);

    // Send back a status code (no body)
    res.sendStatus(201); // 201 Created

});

//Listen for Requests
const port = 5000;
app.listen(port, () => {
// kind of like our onReady function
console.log('App is up and Running');
});
