
import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard/RecipeCard";
import axios from "axios";

class RecipeSection extends Component {
  state = {
    recipes: [], 
  };

  componentDidMount() {
    this.getRecipesAPI();
  }

  getRecipesAPI = () => {
    axios.get('http://localhost:4000/recipes/get?_sort=id&_order=desc')
      .then((result) => {
        this.setState({
          recipes: result.data,
        });
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  };

  render() {
    const { recipes } = this.state;
    const recipesRows = [];
    const recipesPerRow = 5;

    for (let i = 0; i < recipes.length; i += recipesPerRow) {
      const row = recipes.slice(i, i + recipesPerRow);
      recipesRows.push(row);
    }
    return (
      <>
      <div className="thumbs-section m-3 pt-5 mb-5 pb-5 ">
          {recipesRows.map((row, index) => (
            <div className="recipe-row d-flex gap-5 mb-5" key={index}>
              {row.map((recipe) => (
                
                <Link
                to={`/recipes/${recipe.id}`}
                key={recipe.id}
                className="recipe-link"
              >
                <RecipeCard data={recipe} />
              </Link>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default RecipeSection;
