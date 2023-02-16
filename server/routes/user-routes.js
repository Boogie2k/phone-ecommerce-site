const express = require("express");

const {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
  getSingleUsers,
} = require("../controller/controller");

const router = express.Router();

router.route("/").get(getUsers).post(createUsers);

router.route("/:id").get(getSingleUsers).patch(updateUsers).delete(deleteUsers);

module.exports = router;
