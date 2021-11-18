var express = require("express");

const { query } = require("../services/db");

var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  // res.send("respond with a resource vicky...");
  const rows = await query("SELECT * from users");

  res.json(rows);
});

module.exports = router;
