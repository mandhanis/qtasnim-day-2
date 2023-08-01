const express = require('express');
const router = express.Router();


const controllerRecipe = require('../controllers/recipes')
router.get('/recipes/get',controllerRecipe.getAllRecipe)
router.post('/recipes/post',controllerRecipe.inputRecipe)
router.put('/recipes/edit/:id',controllerRecipe.modifiedRecipe)
router.delete('/recipes/delete/:id', controllerRecipe.dropRecipe)
router.get('/recipes/search', controllerRecipe.searchRecipe)
router.get('/recipes/show/:recipe_id',controllerRecipe.showRecipeComment)
router.get('/recipes/rec',controllerRecipe.showNewRecipes)

router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });
  
  module.exports = router;