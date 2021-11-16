var express = require("express");
var router = express.Router();

/* GET hello page. */
router.get('/hello', function(req, res, next) {
  const name = req.query.name;
  console.log(`Name : ${name}`);
  res.render('hello', { name: name });
});

module.exports = router;
