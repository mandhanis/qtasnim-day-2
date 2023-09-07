// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import RecipeCard from "./RecipeCard/RecipeCard";
// import axios from "axios";
// import jwt_decode from "jwt-decode";

// const MyRecipe = () => {
//     const [recipes, setRecipes] = useState([]);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const decodedToken = jwt_decode(token);
//             const senderId = decodedToken.id;
            
//             getRecipesAPI(senderId);
//         }
//     }, []);

//     const getRecipesAPI = (senderId) => {
//         axios.get(`http://localhost:4000/recipes/myrecipe/${senderId}`)
//             .then((result) => {
//                 setRecipes(result.data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching recipes:', error);
//             });
//     };

//     const recipesRows = [];
//     const recipesPerRow = 5;

//     for (let i = 0; i < recipes.length; i += recipesPerRow) {
//         const row = recipes.slice(i, i + recipesPerRow);
//         recipesRows.push(row);
//     }

//     return (
//         <div className="thumbs-section m-3 pt-5 mb-5 pb-5">
//             {recipesRows.map((row, index) => (
//                 <div className="recipe-row d-flex gap-5 mb-5" key={index}>
//                     {row.map((recipe) => (
//                         <Link
//                             to={`/recipes/${recipe.id}`}
//                             key={recipe.id}
//                             className="recipe-link"
//                         >
                            
//                             <RecipeCard data={recipe}  />
//                         </Link>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default MyRecipe;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard/RecipeCard";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Navbar from "../Navbar/Navbar";

function MyRecipe() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = jwt_decode(token);
        const senderId = decodedToken.id;

        axios
            .get(`http://localhost:4000/recipes/myrecipe/${senderId}`)
            .then((result) => {
                setRecipes(result.data);
                console.log(result.data);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }
}, []);

 


  const recipesRows = [];
  const recipesPerRow = 5;

  for (let i = 0; i < recipes.length; i += recipesPerRow) {
    const row = recipes.slice(i, i + recipesPerRow);
    recipesRows.push(row);
  }

  return (
    <>
    <Navbar />
      <div className="thumbs-section m-3 pt-5 mb-5 pb-5 ">
        {recipesRows.map((row, index) => (
          <div className="recipe-row d-flex gap-5 mb-5" key={index}>
            {row.map((recipes) => (
              <Link
                to={`/recipes/${recipes.id}`}
                key={recipes.id}
                className="recipe-link"
              >
                <RecipeCard key={recipes.id} data={recipes} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyRecipe;
