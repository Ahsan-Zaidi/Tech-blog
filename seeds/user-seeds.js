const { User } = require('../models');

const userData = [
    {
        username: 'MikeTyson',
        password: 'Sweetmelon'
    },
    {
        username: 'MikeJordan',
        password: 'Number23'
    },
    {
        username: 'MikeJackson',
        password: 'Moonwalking'
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;