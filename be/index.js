const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { createPool } = require("mysql");
const { password } = require("pg/lib/defaults");
const app = express();
const db = createPool({
  host: "localhost",
  user: "root",
  password: "ta123@",
  database: "weather_node_react",
  connectionLimit: 10,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// pool.query(`select * from favourite `, (err, result, fiels) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });
app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log("delete_id:", id);
  const sqlDelete = "DELETE FROM favourite WHERE id =?";
  db.query(sqlDelete, [id], (err, result) => {
    if (err) {
      return console.log("ERROR", err);
    }
    res.send(result);
  });
});
app.get("/api/get/:loginID", (req, res) => {
  const id = req.params.loginID;
  console.log("UserID:", id);
  const sqlGet = "SELECT id, favourite from favourite where user_id = (?)";
  db.query(sqlGet, [id], (err, result) => {
    res.send(result);
  });
});
app.post("/api/insert", (req, res) => {
  const favourite = req.body.favourited;
  const user_id = req.body.loginID;
  console.log("place", favourite);
  console.log("Id:", user_id);
  const sqlInsert = "INSERT INTO favourite (favourite, user_id) VALUES (?, ?);";
  db.query(sqlInsert, [favourite, user_id], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(result);
      res.send("Data is printed");
    }
  });
});

app.post("/api/update", (req, res) => {
  console.log(req.body.favourite);
  const favourite = req.body.favourite;
  const id = req.body.id;
  console.log("id", favourite);

  const sqlGet = "UPDATE favourite SET favourite = (?) WHERE id = (?)";
  db.query(sqlGet, [favourite, id], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(result);
      res.send("Data is updated");
    }
  });
});

app.post("/register/insert", (req, res) => {
  const name = req.body.inputValuesr.name;
  const email = req.body.inputValuesr.email;
  const password = req.body.inputValuesr.password;
  console.log(name);
  const sqlRegAuth = "SELECT * FROM user WHERE name = (?) AND email = (?)";
  db.query(sqlRegAuth, [name, email], (err, result) => {
    console.log("Result:", result);
    if (err) {
      return console.log(err);
    } else if (result.length === 0) {
      const sqlReg =
        "INSERT INTO user (name, email, password) VALUES (?, ?, ?); ";
      db.query(sqlReg, [name, email, password], (err, result) => {
        if (err) {
          return console.log(err);
        } else {
          console.log("result:", result);
          console.log(result);
          res.send("Data is inserted");
        }
      });
    } else {
      res.status(401).send({ message: "User Name and Email already taken" });
    }
  });
});
app.post("/login", (req, res) => {
  const email = req.body.inputValuesl.email;
  const password = req.body.inputValuesl.password;
  console.log("email:", email);
  console.log("password:", password);
  const sqlLogin = "SELECT * FROM user WHERE email = (?) AND password = (?)";
  db.query(sqlLogin, [email, password], (err, result) => {
    if (err) {
      res.status(400).send({ err: err });
      console.log("err:", err);
    } else if (result.length > 0) {
      console.log("user:", result[0].id);
      res.status(200).send({ message: result[0].id });
    } else {
      console.log("wrong password");
      res.status(401).send({ message: "Wrong username/password comination!" });
    }
  });
});
app.listen(3001, () => {
  console.log("The Server is started on port 3001");
});
