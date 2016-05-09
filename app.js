var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
$base = __dirname+'/';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB
mongoose.connect('mongodb://localhost/projectdb');
var db = mongoose.connection;

// Routes
var apiModel1 = require('./Routes/Api/model1');
var apiModel2 = require('./Routes/Api/model2');

app.use('/api/model1collection', apiModel1);
app.use('/api/model2collection', apiModel2);
app.use(express.static(__dirname+'/Web'));

app.listen(3332);
console.log('Running on port 3000...');
