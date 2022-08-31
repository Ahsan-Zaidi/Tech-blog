//required files to create connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync();



//Create User class
//model is only created once user information is verified
class User extends Model {
    
    async checkPassword(loginPW) {  
           return await bcrypt.compare(loginPW,this.password)      
        
        }
       
   }


//Blueprint for User class
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    }
}, 

//Set boundries for the table
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

//export file
module.exports = User;