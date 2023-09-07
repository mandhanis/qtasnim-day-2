const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const {
  getComments,
  postComment,
  updateComment,
  deleteComment,
  showComment,
} = require("../models/comments");

exports.getAllComment = async (req, res) => {
  try {
    const data = await getComments();
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.inputComment = async (req, res) => {
  try {
    const { commenter_id, text, recipe_id } = req.body;
    const data = await postComment(commenter_id, text, recipe_id );
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }

};

exports.modifiedComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;
    const data = await updateComment(text, commentId);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.dropComment = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteComment(id);
    if (data) {
      res.status(200).send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

exports.showRecipeComment = async (req, res) => {
  try {
    const { recipe_id } = req.params;
    const show = await showComment(recipe_id);
    if (show) {
      res.status(200).send(show);
    }
  } catch (error) {
    res.send(error);
  }
};
