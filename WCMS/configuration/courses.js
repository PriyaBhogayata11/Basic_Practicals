const Sequelize = require('sequelize');
const sequelize = require('./database');

const Courses = sequelize.define("courses", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    duration: Sequelize.STRING,
    fees: Sequelize.INTEGER(10)

});
module.exports = Courses;