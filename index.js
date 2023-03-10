const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("assets"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const usersRouter = require("./routes/posts.router");

app.use("/api/v1/users", usersRouter);

app.use("/", (req, res) => {
  res.sendFile("/Clone/deploy-nodejs-mysql/assets/html/index.html");
});
app.listen(5000, () => {
  console.log("Server is running....");
});
