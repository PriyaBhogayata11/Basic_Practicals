
var express = require('express');
var bodyParser = require('body-parser');

var todocontroller = require('./controllers/todocontroller');
var url_encoded = bodyParser.urlencoded({extended: false});



var app = express();

app.set('view engine','ejs');
app.use(express.static('./public'));




todocontroller(app);

app.listen(4000);

