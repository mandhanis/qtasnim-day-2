import React from "react";
import Title from "../Title/Title";
import './NewRecipe.css'
import TitleWithButton from "../TitleWithButton/TitleWithButton";
const NewRecipe = (props) => {
    
    return (
        <div className="new-section">
            <Title title="New Recipe"/>
            <div className="">
                <div className="orange-stuff"></div>
                <img src="https://i.pinimg.com/564x/44/df/f8/44dff896ae13e5c2bbc899e017db0af1.jpg" alt="New Recipe" className="new-img" />
            </div>
            <div className="">

            <TitleWithButton className="title-new" titleName="Paleo Pumpkin Pancakes" titleBody="Light and Fluffy Pumpkin Pancakes that are grain free and Paleo! Absolutely delicious flavor, light texture, easy to make, and incredibly satisfying" link="/post-1" />
            </div>
        </div>
      
    )
}

export default NewRecipe;