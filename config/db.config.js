const { createPool } = require("mysql");

const db = createPool({
  port: 3306,
  host: "localhost",
  user: "juan_caste",
  password: "@Manolo221212",
  database: "course_node_users",
  connectionLimit: 10,
});
 module.exports = db;
