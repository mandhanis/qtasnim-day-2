const {
  getUsers,
  getUserName,
  getUserEmail,
  getUserPhone,
  postUser,
  updateUser,
  deleteUser,
} = require("../models/users");
const bcrypt = require("bcrypt");

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
    const errors = [];
    const nameExists = await getUserName(name);
    const emailExists = await getUserEmail(email);
    const phoneExists = await getUserPhone(phone);
    
    if (!name || !email || !phone || !password) {
      errors.push({ message: "Please enter all fields" });
    }
    if (nameExists) {
      errors.push({ message: "Name already exists" });
    }
    if (emailExists) {
      errors.push({ message: "Email already registed" });
    }
    if (phoneExists) {
      errors.push({ message: "Phone already registed " });
    }
    if (password.length < 6) {
      errors.push({ message: "Password should be at least 6 characters" });
    }
    
    if (errors.length > 0) {
      req.flash('errorMsg', errors);
      res.redirect("/users/register");
    } else {
      const hashedPassword = await bcrypt.hash(password, 5);
      await postUser(name, email, phone, hashedPassword);
      req.flash('successMsg', 'Registration successful. You can now log in.');
      res.redirect("/users/login");
    }
  } catch (error) {  
    console.log(error);
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
