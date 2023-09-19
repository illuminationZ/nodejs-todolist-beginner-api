// NOTE - export the database connection string

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database_name: process.env.DB_NAME,
    database_url: process.env.DATABASE_URL,
};
