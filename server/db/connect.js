const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://ben:08080561305@nodeexpressprojects.xc4djun.mongodb.net/School-project?retryWrites=true&w=majority";

let connectDB = () => {
  mongoose.connect(connectionString).then(() => {
    console.log("ok");
  });
};

module.exports = connectDB;
