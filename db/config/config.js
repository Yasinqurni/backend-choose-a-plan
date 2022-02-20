require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

module.exports = {
  [env]: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  },
};