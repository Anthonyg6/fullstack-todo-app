const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");

const Todo = require("../todoModel/todo");
app.use(bodyParser.json());

router.post("/todos", async (req, res, next) => {
  let todo = new Todo({
    content: req.body.content
  });
  todo
    .save()
    .then(() => {
      res.status(201).json({
        message: "New Todo was been posted"
      });
    })
    .catch(error => {
      console.log(error);
      res.status(400).json({
        error: error
      });
    });
});

router.delete("/:_id", (req, res, next) => {
  Todo.deleteOne({ _id: req.params._id })
    .then(() => {
      res.status(200).json({
        message: "Deleted Todo"
      });
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.get("/todos", async (req, res) => {
  try {
    Todo.find().then(todos => {
      res.status(200).json(todos);
    });
  } catch (err) {
    res.status(400).json({
      error
    });
  }
});

module.exports = router;
