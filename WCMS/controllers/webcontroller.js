const bodyParser = require('body-parser');
const url_encoded = bodyParser.urlencoded({ extended: false });


module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');

    });

    app.get('/add', function(req, res) {
        res.render('add');

    });

    app.get('/edit/:id', function(req, res) {


    });

    app.get('/delete/:id', function(req, res) {


    });
}