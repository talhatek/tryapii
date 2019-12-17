const Sequelize = require('sequelize');
const op =Sequelize.Op;

// Option 1: Passing parameters separately
module.exports = new Sequelize('EMP', 'root', '4723', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: op
});

