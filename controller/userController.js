const { query } = require("../services/db");

async function getUser(req, res, next) {
  // res.send("respond with a resource vicky...");
  const rows = await query("SELECT * from users");

  res.json(rows);
}

module.exports = {
  getUser,
};
