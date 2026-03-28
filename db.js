require('dotenv').config();
const sql = require('mssql');


// Database configuration
const dbConfig = {
  user: process.env.DB_USER || "sa",
  password: process.env.DB_PASSWORD || "12345678",
  server: process.env.DB_SERVER || "localhost\\SQLEXPRESS",
  database: process.env.DB_NAME || "LibraryManagementSystem",
  // port: 1433, 
  options: {
    encrypt: false, // Set to true if using Azure
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

console.log("DB Config:", dbConfig);

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed!', err));


module.exports = { sql, poolPromise };
