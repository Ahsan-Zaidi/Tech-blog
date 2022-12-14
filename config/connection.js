//installed dependencies
const Sequelize = require('sequelize');
require('dotenv').config();

//if the login information is provided accurate sequelize will connect with server
let sequelize;
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
    });
}

//export the file
module.exports = sequelize;

