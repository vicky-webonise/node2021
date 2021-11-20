const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/students", function (req, res, next) {
  Student.find({})
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {});
});

module.exports = router;
