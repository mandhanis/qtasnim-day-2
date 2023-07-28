const {
  getRecipes,
  postRecipe,
  updateRecipe,
  deleteRecipe,
  searchByName,
  newRecipes,
  recipeById,
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

exports.inputRecipe = async (req, res) => {
  try {
    const { name, ingredients, sender_id } = req.body;
    const data = await postRecipe(name, ingredients, sender_id);
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
    const { name, ingredients } = req.body;
    const data = await updateRecipe(name, ingredients, id);
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
