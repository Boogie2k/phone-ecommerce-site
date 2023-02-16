const Item = require("../model/Model");
const Users = require("../model/Models");
const jwt = require("jsonwebtoken");

const getItems = async (req, res) => {
  const items = await Item.find({});

  res.status(200).json({ items });
};

const getSingleItems = async (req, res) => {
  const items = await Item.findOne({ _id: req.params.id });
  res.json({ items });
};

const createItems = async (req, res) => {
  const items = await Item.create(req.body);
  res.status(200).json({ items });
};

const deleteItems = async (req, res) => {
  const { id: taskID } = req.params;
  const items = await Item.findOneAndDelete({ _id: taskID });
  res.status(200).json({ items });
};
const updateItems = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const item = await Item.findById(taskID);
    if (!item) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    const updatedItem = await Item.findByIdAndUpdate(taskID, req.body, {
      new: true,
    });
    res.status(200).json({ item: updatedItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  const items = await Users.find({});

  res.status(200).json({ items });
};

const getSingleUsers = async (req, res) => {
  const items = await Users.findOne({ _id: req.params.id });
  res.json({ items });
};

const createUsers = async (req, res) => {
  const items = await Users.create(req.body);
  res.status(200).json({ items });
};

const deleteUsers = async (req, res) => {
  const { id: taskID } = req.params;
  const items = await Users.findOneAndDelete({ _id: taskID });
  res.status(200).json({ items });
};
const updateUsers = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const item = await Users.findById(taskID);
    if (!item) {
      res.status(404).json({ message: "Item not found" });
      return;
    }
    const updatedItem = await Users.findByIdAndUpdate(taskID, req.body, {
      new: true,
    });
    res.status(200).json({ item: updatedItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneUsers = async (req, res) => {
  try {
    const items = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (items) {
      const token = jwt.sign(
        {
          email: req.body.email,
          username: req.body.username,
          firstname: req.body.firstname,
        },
        "boogie.secret"
      );
      return res.json({ items: token });
    } else {
      return res.json({ msg: "err" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getItems,
  getSingleItems,
  createItems,
  deleteItems,
  updateItems,
  getUsers,
  getSingleUsers,
  updateUsers,
  deleteUsers,
  createUsers,
  getOneUsers,
};
