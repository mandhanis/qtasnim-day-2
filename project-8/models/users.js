const { pool } = require("../connect");

exports.getUsers = async () => {
  try {
    const result = await pool.query("SELECT * FROM users order by id ASC");
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postUser = async (name, email, phone, password) => {
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, password]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateUser = async (name, email, phone, id) => {
  try {
    const result = await pool.query(
      "UPDATE users SET name=$1, email=$2, phone=$3 where id=$4 RETURNING *",
      [name, email, phone, id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUser = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};
