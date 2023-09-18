// NOTE - export the database connection string

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    authSource: process.env.DB_AUTH_SOURCE,
    dialect: 'mongodb',
};