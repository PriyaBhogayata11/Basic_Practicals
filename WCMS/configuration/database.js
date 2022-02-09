const {
    Sequelize,
    DataTypes
} = require('sequelize');
const mysql2 = require('mysql2');
const courses = require('./courses');

const sequelize = new Sequelize('priyab', 'priyab', '2ZCahBJSUKanHFQKm2EYaNrKmSSC64QD', {
    host: '15.206.7.200',
    port: '3310',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected!');
    })
    .catch(err => {
        console.log(err);
    });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.courses = require('./courses')(sequelize, DataTypes);
db.sync({ force: true }).then((result) => {
    return Courses.create({ name: "HTML", duration: "1 month", fees: 1200 });
    console.log(result);
}).then(courses => {
    console.log("First Course Created");

}).
catch((err) => {
        console.log(err);
    )
};