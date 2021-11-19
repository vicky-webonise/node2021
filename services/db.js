const mysql = require("mysql2/promise");
const config = require("../config");
const pool = mysql.createPool(config.db);

async function query(sql, param) {
  const [rows, fields] = await pool.execute(sql, param);

  return rows;
}

module.exports = {
  query,
};
