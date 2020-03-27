const express = require('express');
const bodyParser = require('body-parser');
const user = require('./router/router');
const app = express();
const morgan = require('morgan');
app.use(morgan("dev"));

const config = require('./config/mongoose.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);



let port = 8000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});