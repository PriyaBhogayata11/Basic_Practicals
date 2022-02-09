const Sequelize = require('sequelize');
const sequelize = require('./database');

module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("courses", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        duration: DataTypes.STRING,
        fees: DataTypes.INTEGER(10)

    });

};