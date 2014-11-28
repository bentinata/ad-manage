var express		= require('express'),
	 bodyParser	= require('body-parser'),
	 logger		= require('morgan'),
	 config		= require('./config/config');


// configure app
var app		= express();
var server	= require('http').createServer(app);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./config/routes')(app);

server.listen(80);
