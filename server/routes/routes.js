const express = require("express");

const {
  createItems,
  deleteItems,
  getItems,
  getSingleItems,
  updateItems,
} = require("../controller/controller");

const router = express.Router();

router.route("/").get(getItems).post(createItems);

router.route("/:id").get(getSingleItems).patch(updateItems).delete(deleteItems);

module.exports = router;
