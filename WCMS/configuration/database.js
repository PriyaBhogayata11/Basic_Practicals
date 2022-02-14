const Sequelize = require('sequelize');
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

module.exports = sequelize;