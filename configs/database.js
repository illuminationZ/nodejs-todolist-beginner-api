// NOTE - export the database connection string

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    username: process.env.MONGO_INITDB_ROOT_USERNAME,
    password: process.env.MONGO_INITDB_ROOT_PASSWORD,
    database_name: process.env.MONGO_INITDB_DATABASE,
    database_url: process.env.DATABASE_URL,
};
