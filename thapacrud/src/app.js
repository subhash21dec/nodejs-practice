const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const Student = require("./models/students");
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/students-api", {
    C
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("No connection");
  });

app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
