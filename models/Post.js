//required files to create connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create the Post class
class Post extends Model {}

//bluepring for Post class
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allownull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    //key provided from relating table user
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},

//set table boundries
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
});

//exporting the file
module.exports = Post;
