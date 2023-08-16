import React from "react";
import { AiOutlineEdit } from "react-icons/ai";    
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/Product/RecipeCard/RecipeCard";

const Profile = () => {
    
    return (
        <>
        <div className="profile container d-flex justify-content-center align-items-center flex-column  ">
            <img src="https://i.pinimg.com/236x/a4/b5/4f/a4b54f03616c2e52727f5b63c71be71c.jpg" className="pfp-profile rounded-circle " alt="user" />
            <AiOutlineEdit className="edit"/>
            <h4 className="mt-2">Jipen Diggidaw</h4>
        </div>
        <div className="mx-5 border-bottom pb-2">
            <a href="/profile" className="text-black mx-3">My Recipe</a>
            <a href="/fav-recipe" className="text-black mx-3">SavedRecipe</a>
            <a href="/fav-recipe" className="text-black mx-3">Liked Recipe</a>
        </div>
        <div className="d-flex flex-row gap-4 m-5">
                <RecipeCard image="https://i.pinimg.com/236x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg" name="Tandoori Chicken" />
                <RecipeCard image="https://i.pinimg.com/236x/0c/3a/f6/0c3af6e9b74530b1c426f63764cceca0.jpg" name="Vietnamese Broken Rice" />
                <RecipeCard image="https://i.pinimg.com/236x/a0/e2/17/a0e217e220e067164753b1c859aad1dd.jpg" name="Dan Dan Noodles" />
        </div>
        <Footer />
        </>
    )
}

export default Profile;