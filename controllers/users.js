const {
  getUsers,
  getUserName,
  getUserEmail,
  getUserPhone,
  postUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

exports.userById = async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await getUserById(userId);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.inputUser = async (req, res) => {
  try {
    const { name, email, phone, password, img_url, pass2 } = req.body;
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
    if (password !== pass2) {
      errors.push({ message: "Password doesn't match " });
    }
    if (password.length < 6) {
      errors.push({ message: "Password should be at least 6 characters" });
    }
    
    if (errors.length > 0) {
      req.flash('errorMsg', errors);
      res.redirect("/users/register");
    } else {
      const hashedPassword = await bcrypt.hash(password, 5);
      const newUser = await postUser(name, email, phone, hashedPassword, img_url);

      jwt.sign({ id: newUser.id }, "secret14114", {
        expiresIn: "1h",
      });
      req.flash('successMsg', 'Registration successful. You can now log in.');
      res.redirect("http://127.0.0.1:3000/users/login");
    }
  } catch (error) {  
    console.log(error);
  }

};


exports.modifiedUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, phone, img_url } = req.body;

    const data = await updateUser(userId, name, email, phone, img_url);

    if (!data) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};
// exports.modifiedUser = async (req, res) => {
//   try {
//     const { id } = req.params.id;
//     const { name, email, phone, password, img_url } = req.body;
//     const data = await updateUser(name, email, phone, password, img_url, id);
//     if (data) {
//       res.status(200).send(data);
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };

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

// exports.checkNameExist = async (req, res) => {
//   try {
//     const { dbName } = req.params;
//     const data = await getUserName(dbName);
//     if (data) {
//       res.status(200).send(data);
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };
// exports.checkEmailExist = async (req, res) => {
//   try {
//     const { dbEmail } = req.params;
//     const data = await getUserEmail(dbEmail);
//     if (data) {
//       res.status(200).send(data);
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };
// exports.checkPhoneExist = async (req, res) => {
//   try {
//     const { dbPhone } = req.params;
//     const data = await deleteUser(dbPhone);
//     if (data) {
//       res.status(200).send(data);
//     }
//   } catch (error) {
//     res.send(error);
//   }
// };


