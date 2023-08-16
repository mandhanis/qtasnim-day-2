import React from "react";
import Title from "../Title/Title";
import RecipeCard from "./RecipeCard/RecipeCard";

const RecipeThumbSection = () => {
    
    return (
        <>
            <Title title="Popular Recipe"/>
            <div className="thumbs-section d-flex gap-5 m-3 pt-5 mb-5 pb-5">
                <RecipeCard image="https://i.pinimg.com/236x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg" name="Tandoori Chicken" />
                <RecipeCard image="https://i.pinimg.com/236x/0c/3a/f6/0c3af6e9b74530b1c426f63764cceca0.jpg" name="Vietnamese Broken Rice" />
                <RecipeCard image="https://i.pinimg.com/236x/a0/e2/17/a0e217e220e067164753b1c859aad1dd.jpg" name="Dan Dan Noodles" />
                <RecipeCard image="https://i.pinimg.com/736x/bd/88/9d/bd889d49994ad6b5e07711aa49e0456c.jpg" name="Blueberry Pancake" />
                <RecipeCard image="https://i.pinimg.com/236x/39/53/b1/3953b16fbaba394a27e65424bba962c0.jpg" name="Coconut Caramel Frappe" />
            </div>
        </>
      
    )
}

export default RecipeThumbSection;