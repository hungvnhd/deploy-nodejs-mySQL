const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const usersRouter = require("./routes/posts.router");

app.use("/api/v1/users", usersRouter);

app.use("/", (req, res) => {
  res.send("hello");
});
app.listen(5000, () => {
  console.log("Server is running....");
});
