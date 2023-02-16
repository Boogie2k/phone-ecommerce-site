const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const tasks = require("./routes/routes");
const users = require("./routes/user-routes");
const { getOneUsers } = require("./controller/controller");
const app = express();

/* const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
  */

app.use(cors());
app.use(express.json());

app.use("/api/v1/phone", tasks);
app.use("/api/v1/register", users);

app.post("/api/v1/login/", getOneUsers);

let start = async () => {
  await connectDB();

  app.listen(5000, () => {
    console.log("sever is up"); 
  });
};

start();
