const express = require('express');
const bodyParser = require('body-parser');


const webController = require('./controllers/webcontroller.js');

const urlEncoded = bodyParser.urlencoded({ extended: false });

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views/pages');


require('./configuration/database');
webController(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});