
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');


const dbURI = "mongodb+srv://test:test@todo.tpfxf.mongodb.net/Todoapp?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((resuult) => console.log('Connected to db'))
.catch((err) => console.log(err));

const url_encoded = bodyParser.urlencoded({extended: false});

var todoSchema = new mongoose.Schema({
    item: String
});

const Todo =  mongoose.model('Todo', todoSchema);

//var data = [{item: 'wake up at 9AM'}, {item: 'Walk dog'}, {item: 'Improving coding skills'}];


module.exports = function(app){

    app.get('/todo', function(req, res){
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        });
       
    });
    
    app.post('/todo', url_encoded, function(req, res){
     var itemOne = Todo(req.body).save(function(err, data){
        if (err) throw err;
        console.log('Item saved');
        res.json(data);
    });
});
    
    app.delete('/todo/:item', function(req, res){
        Todo.find({item: req.params.item.replace(/-/g, "-")}).remove(function(err, data) {
            if (err) throw err;
            res.json(data);
    });
    });
}