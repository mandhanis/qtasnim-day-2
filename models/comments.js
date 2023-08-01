const { pool } = require("../connect");

exports.getComments = async () => {
  try {
    const result = await pool.query("SELECT * FROM comments");
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postComment = async (commenter_id, text, recipe_id) => {
  try {
    const result = await pool.query(
      "INSERT INTO comments (commenter_id, text, recipe_id) VALUES ($1, $2, $3) RETURNING *",
      [commenter_id, text, recipe_id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateComment = async (text, id) => {
  try {
    const result = await pool.query(
      "UPDATE comments SET text=$1 where id=$2 RETURNING *",
      [text, id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteComment = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM comments WHERE id = $1 RETURNING *",
      [id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.showComment = async () => {
  try {
    const result = await pool.query(
      "SELECT users.name as user, comments.text FROM comments INNER JOIN users ON comments.commenter_id = users.id"
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};