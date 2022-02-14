const {
    Sequelize,
    DataTypes
} = require('sequelize');
const mysql2 = require('mysql2');
const data = require('../configuration/courses');
const bodyParser = require('body-parser');
const sequelize = require('../configuration/database');
const url_encoded = bodyParser.urlencoded({ extended: false });
const Courses = require('../configuration/courses');
const { name } = require('ejs');


module.exports = function(app) {

    app.get('/', function(req, res) {
        return sequelize.sync().then(() => {
            return data.findAll({
                raw: true,
            })
        }).then(courses => {
            console.log(courses);
            res.render('index', {
                Courses: courses
            });
        }).catch((err) => {
            console.log(err);
        });



    });

    app.post('/insert', url_encoded, function(req, res) {
        const ins = req.body;
        Courses.create({
            name: ins.name,
            duration: ins.duration,
            fees: ins.fees
        }).then(function(Courses) {
            if (Courses) {
                res.redirect('/');
            } else {
                res.status(400).send('Error in insert new record');
            }
        });


    });

    app.get('/add', function(req, res) {
        res.render('add');

    });

    app.get('/edit/:id', function(req, res) {

        return sequelize.sync().then(() => {
            const id = req.params.id;
            return Courses.findOne({ where: { id: id } })
        }).then(courses => {
            console.log(courses);
            const CoursesData = courses.dataValues;
            res.render('edit', {
                Courses: CoursesData
            });
        }).catch((err) => {
            console.log(err);
        });


    });

    app.post('/edit', function(req, res) {

        Courses.update({ name: req.body.name, duration: req.body.duration, fees: req.body.fees }, { where: { id: req.body.id } })

        .then((result) => {
                console.log("Data was Updated");
                res.redirect('/');
            })
            .catch((err) => {
                console.log("Error : ", err)
            });

        app.get('/delete/:id', function(req, res) {
            Courses.destroy({
                where: {
                    id: req.params.id
                }
            }).then(Courses => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err)
            })

        });
    });
}