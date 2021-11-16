const express = require("express");
const router = express.Router();

const app = express();

app.use(express.json());

const PORT = 5000;

// middleware
const logger = (req, res, next) => {
  const dateObj = new Date();
  console.log(dateObj);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send("Hello Word User List");
});

app.post("/", (req, res) => {
  res.send("Hello Word");
});

app.put("/", (req, res) => {
  res.send("Hello Word");
});

app.delete("/", (req, res) => {
  res.send("Hello Word");
});


app.listen(PORT, () => {
  console.log(`Application is started on ${PORT}.`);
});
