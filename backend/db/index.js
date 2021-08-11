const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "post878",
  host: "localhost",
  port: 5432,
  database: "nldb",
});

module.exports = {
  pool,
}
