const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  email: { type: String },
  username: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  password: { type: String },
});

module.exports = Mongoose.model("User", UserSchema);
