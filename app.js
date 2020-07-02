//spins up the express application which makes handling requests easier for us
const express = require('express');

//execute express() to spin up express application to gain access to utility methods
const app = express();

//app.use() creates a middleware that the incomming request must go through
//pass an arrow function into .use()
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It Works!'
    });
});


//export this file so we can import it in the server.js file
module.exports = app
