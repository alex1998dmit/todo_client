require('dotenv').config()

// const creds = {
//   "development": {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOSTNAME,
//     port: process.env.DB_PORT || 5432,
//     dialect: 'postgresql'
//   },
//   "test": {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOSTNAME,
//     port: process.env.DB_PORT || 5432,
//     dialect: 'postgresql'
//   },
//   "production": {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOSTNAME,
//     port: process.env.DB_PORT || 5432,
//     dialect: 'postgresql'
//   }
// }

const creds = {
    username: "unicorn_user",
    password: "magical_password",
    database: "todo",
    host: "localhost",
    port: 5432,
    dialect: 'postgresql'
}

module.exports = creds;
