const express = require('express');
const bodyParser = require('body-parser');

const webController = require('./controllers/webcontroller.js');




const app = express();
app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);


require('./configuration/database');
webController(app);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});