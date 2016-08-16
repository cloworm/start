var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var volleyball = require('volleyball');
var swig = require('swig');

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(err, req, res, next){
	console.log("On noes!!!!");
	console.log(err, err.stack);
});

app.listen(port, function() {
	console.log("Server is listening intently at port " + port + "...");
});

