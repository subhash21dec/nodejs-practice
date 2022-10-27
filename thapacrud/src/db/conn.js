const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("No connection");
  });
