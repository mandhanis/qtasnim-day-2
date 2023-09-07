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

exports.getRecipeById = async (recipeId) => {
  try {
    const result = await pool.query("SELECT * FROM recipes WHERE id = $1", [recipeId]);
    if (result.rows.length > 0) {
      return result.rows[0];
    } else {
      return null; 
    }
  } catch (error) {
    console.log(error);
  }
};

exports.postRecipe = async (name, ingredients, sender_id, img_url, vid_url, description) => {
  try {
    const result = await pool.query(
      "INSERT INTO recipes (name, ingredients, sender_id, img_url, vid_url, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, ingredients, sender_id, img_url, vid_url, description]
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

exports.updateRecipe = async (name, ingredients, img_url, vid_url, id) => {
  try {
    const result = await pool.query(
      "UPDATE recipes SET name=$1, ingredients=$2, img_url=$3, vid_url=$4 where id=$5 RETURNING *",
      [name, ingredients, img_url, vid_url, id]
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
      "SELECT r.*, u.name as sender, u.img_url as pfp from recipes r join users u on r.sender_id = u.id where r.id = $1 ",
      // "SELECT u1.name as sender, r.name, r.ingredients, u2.name as commenter, c.text as comment from recipes r JOIN users u1 ON r.sender_id = u1.id JOIN comments c ON c.recipe_id = r.id join users u2 on c.commenter_id = u2.id where recipe_id = $1",
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
    const query = `SELECT * FROM recipes WHERE name ILIKE $1`;
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
      "SELECT * FROM recipes ORDER BY id DESC LIMIT 1"
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
  }
};

exports.selectBySender = async (sender_id) =>{
  try {
    const result = await pool.query(
      "SELECT * FROM recipes where sender_id =$1", [sender_id]
    );
    if (result) {
      return result.rows;
    }
  } catch (error) {
    console.log(error);
    
  }
}




