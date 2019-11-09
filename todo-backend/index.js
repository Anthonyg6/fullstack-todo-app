const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3500;
const todosRouter = require("./routes/todos");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/todo", todosRouter);
app.listen(port, function() {
  console.log("Running on " + port);
});

mongoose
  .connect(
    "mongodb+srv://AnthonyGallegos:n6hVxRAmH9r6uYg7@cluster0-roxtp.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch(error => {
    console.log("Was unable to connect to MongoDB");
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

module.exports = app;
