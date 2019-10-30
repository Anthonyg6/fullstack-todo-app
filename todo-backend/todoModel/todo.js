const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  content: { type: String, required: true }
});

module.exports = mongoose.model("todo", todoSchema);
