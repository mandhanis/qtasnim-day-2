const {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
} = require("../models/users");

exports.getAllUser = async (req, res) => {
  try {
    const data = await getUsers();
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.inputUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const data = await postUser(name, email, phone, password);
    if (data) {
      return res.status(200).json(data);
    }
    res.redirect("/users/login");
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.modifiedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const data = await updateUser(name, email, phone, id);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.dropUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};