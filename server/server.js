console.log('Look ma, my first express app!');

//Load the express libary
//from node_modules/express
const express = require('express');

// create our "app" (Server)
const app = express();

//Tell express where to find all 
// of our "public" files 
// aka "Client-side" files
// aka "Static assets"
app.use(express.static('./server/public'));

//Listen for Requests
const port = 5000;
app.listen(port, function() {
// kind of like our onReady function
console.log('App is up and Running');
});
