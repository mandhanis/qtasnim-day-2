import React from "react";
import Fav from '../../style/fav-img.jpg'
import Title from "../Title/Title";
import TitleWithButton from "../Button/TitleWithButton";

const FavRecipe = (props) => {
    
    return (
        <div className='container-fav'>
            <Title title="Popular For You!!"/>
            <img src={Fav} alt="Fav" className='fav-img' />
            <div className='only-border' />
            <TitleWithButton titleName="Healthy Bone Broth Ramen (Quick & Easy)" titleBody="Quick + Easy Chicken Bone Broth Ramen Healthy chicken ramen in a hurry? That’s right!" link="/post-1" />

        </div>
    )
}

export default FavRecipe;

