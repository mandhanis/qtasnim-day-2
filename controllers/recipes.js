const {
  getRecipes,
  postRecipe,
  updateRecipe,
  deleteRecipe,
  searchByName,
  newRecipes,
  recipeById,
  getRecipeById,
  selectBySender,
} = require("../models/recipes");


exports.getAllRecipe = async (req, res) => {
  try {
    const data = await getRecipes();
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.getRecipeByIdController = async (req, res) => {
  const recipeId = req.params.id;

  try {
    const recipe = await getRecipeById(recipeId);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.inputRecipe = async (req, res) => {
  try {
    const { name, ingredients, sender_id, img_url, vid_url, description } = req.body;
    const data = await postRecipe(name, ingredients, sender_id, img_url, vid_url, description );
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.modifiedRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, ingredients, img_url, vid_url } = req.body;
    const data = await updateRecipe(name, ingredients, img_url, vid_url, id);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.dropRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteRecipe(id);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.searchRecipe = async (req, res) => {
  try {
    const { name } = req.query;
    const result = await searchByName(name);
    if (result) {
      res.status(200).send(result);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.showNewRecipes = async (req, res) => {
  try {
    const show = await newRecipes();
    if (show) {
      res.status(200).send(show);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.showRecipeComment = async (req, res) => {
  try {
    const { recipe_id } = req.params;
    const show = await recipeById(recipe_id);
    if (show) {
      res.status(200).send(show);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.myRecipe = async (req, res) => {
  try {
    const { sender_id } = req.params;
    const data = await selectBySender(sender_id);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
}