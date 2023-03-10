const db = require("../model/db");
module.exports.getAll = (req, res) => {
  db.execute("SELECT * FROM users")
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) => console.log(err));
};

module.exports.createNewUser = (req, res) => {
  const {
    id,
    bankName,
    phone,
    fullName,
    citizedId,
    userName,
    password,
    smartOTP,
    createdAt,
    updatedAt,
  } = req.body;
  db.execute("INSERT INTO users VALUE(?,?,?,?,?,?,?,?,?,?)", [
    Number(id),
    bankName,
    phone,
    fullName,
    citizedId,
    userName,
    password,
    smartOTP,
    createdAt,
    updatedAt,
  ])
    .then((data) => {
      res.status(200).json({ message: "create user successfully" });
    })
    .catch((err) => console.log(err));
};
