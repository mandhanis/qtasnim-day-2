const express = require('express');
const router = express.Router();

const controllerComment = require('../controllers/comments')
router.get('/comments/get',controllerComment.getAllComment)
router.post('/comments/post', controllerComment.inputComment)
router.put('/comments/edit/:id', controllerComment.modifiedComment)
router.delete('/comments/delete/:id', controllerComment.dropComment)
router.get('/comments/show',controllerComment.showRecipeComment)

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;