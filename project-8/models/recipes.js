const { pool } = require("../connect");

exports.getRecipes = async () => {
  try {
    const result = await pool.query("SELECT * FROM recipes");
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postRecipe = async (name, ingredients, sender_id) => {
  try {
    const result = await pool.query(
      "INSERT INTO recipes (name, ingredients, sender_id) VALUES ($1, $2, $3) RETURNING *",
      [name, ingredients, sender_id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postComment = async (commenter_id, text) => {
  try {
    const result = await pool.query(
      "INSERT INTO comments (commenter_id, text) VALUES ($1, $2, $3, $4) RETURNING *",
      [commenter_id, text]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateRecipe = async (name, ingredients, id) => {
  try {
    const result = await pool.query(
      "UPDATE recipes SET name=$1, ingredients=$2 where id=$3 RETURNING *",
      [name, ingredients, id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.deleteRecipe = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM recipes WHERE id = $1 RETURNING *",
      [id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.recipeById = async (recipe_id) => {
  try {
    const result = await pool.query(
      "SELECT u1.name as sender, r.name, r.ingredients, u2.name as commenter, c.text as comment from recipes r JOIN users u1 ON r.sender_id = u1.id JOIN comments c ON c.recipe_id = r.id join users u2 on c.commenter_id = u2.id where recipe_id = $1",
      [recipe_id]
    );
    
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.searchByName = async (name) => {
  try {
    const query = `SELECT name FROM recipes WHERE name ILIKE $1`;
    const result = await pool.query(query, [`%${name}%`]);
    return result.rows;
  } catch (error) {
    console.error("Error executing search query", error);
    throw error;
  }
};

exports.newRecipes = async () => {
  try {
    const result = await pool.query(
      "SELECT recipes.name FROM recipes ORDER BY id DESC LIMIT 5"
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};
