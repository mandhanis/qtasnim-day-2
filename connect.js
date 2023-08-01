const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: String(process.env.PGPASSWORD),
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error executing query", err);
  } else {
    console.log("Connected to the PostgreSQL database.");
    console.log("Current date from the database:", res.rows[0].now);
  }
});

module.exports = { pool };
