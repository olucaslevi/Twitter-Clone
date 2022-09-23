/////////////////////////////////////////////////
//// My Javascript Database Sequelize based.////
////////////////////////////////////////////////

const Sequelize = require('sequelize');

const connection = new Sequelize('React-Api-Teste','root','MY-PASSWORD',{
    // ? params
    host: 'localhost', dialect:'mysql',timezone:'-03:00',
});


module.exports = connection;