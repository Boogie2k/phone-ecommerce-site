const Mongoose = require("mongoose");

const TaskSchema = new Mongoose.Schema({
  image: { type: String },
  name: { type: String },
  model: { type: String },
  price: { type: Number },
  qty: { type: Number },
  description: { type: String },
  specs: { type: String },
  tags: { type: String },
});

module.exports = Mongoose.model("Task", TaskSchema);
