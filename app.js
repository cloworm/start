var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var volleyball = require('volleyball');
var swig = require('swig');
var router = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/materialize-css', express.static('./node_modules/materialize-css/dist'));
app.use('/jquery', express.static('./node_modules/jquery/dist'));
app.use(express.static('./public'));

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', router);

app.use(function(err, req, res, next){
	console.log("On noes!!!!");
	console.log(err, err.stack);
});

app.listen(port, function() {
	console.log("Server is listening intently at port " + port + "...");
});

