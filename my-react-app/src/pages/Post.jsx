import React from "react";
import VidButton from "../components/TitleWithButton/VidButton";
import UserComment from "../components/Comment/UserComment";
import Footer from "../components/Footer/Footer";

const Post = (props) => {
    
    return (
        <>
        <div className="container d-flex justify-content-center align-items-center flex-column  mt-2 p-3">
            <h1 className="">Paleo Pumpkin Pancake</h1>
            <img src="https://i.pinimg.com/564x/44/df/f8/44dff896ae13e5c2bbc899e017db0af1.jpg" className=" recipe-img rounded mt-3 shadow" alt="" />
        </div>
        <div className="ingre-sec px-5 mx-5 gap-5 d-flex flex-column">
            <h3 className="ingre-title">Ingredients</h3>
            <ul className="ingre d-flex flex-column gap-4 mb-3" >
                <li>3/4 cup organic pumpkin puree canned or homemade</li>
                <li>2/3 cup full fat canned coconut milk*</li>
                <li>3 eggs</li>
                <li>1/4 cup pure maple syrup plus more for serving if desired</li>
                <li>1/4 cup pure maple syrup plus more for serving if desired</li>
                <li>1 tsp pure vanilla extract</li>
                <li>7 Tbsp coconut flour</li>
                <li>1/4 cup tapioca flour</li>
            </ul>
        </div>
        <div className="">
        <h3 className="ingre-title mb-5 px-5 mx-5 mt-5">Video Step</h3>
            <VidButton />
            <VidButton />
            <VidButton />  
        </div>
        <div className="mb-5 pb-5">
            <label className="comment-title align-text-left mx-5 px-5 mb-1" for="comment ">Comment:</label>
            <div className="mx-5 px-5 d-flex align-items-center justify-content-center flex-column">
                <textarea name="comment" id="" title="Comment" className="text-comment container-fluid mb-3"></textarea>
                <input type="submit" className="btn button" />
            </div>

            <label className="comment-user align-text-left mx-5 px-5 mb-1 mt-5" for="comment ">Comment</label>

               <UserComment 
                    img="https://i.pinimg.com/236x/6d/7f/dc/6d7fdce69ffe4b8580f0809c58f56f41.jpg"
                    username="Aurantzy"
                    comment="Good Recipe, i think this is the best food i make rn, thankuuu"
                />
               <UserComment 
                    img="https://i.pinimg.com/236x/a4/b5/4f/a4b54f03616c2e52727f5b63c71be71c.jpg"
                    username="Jipen"
                    comment="naaah... this is sooo good i think i'd should make this again ASAP"
                />
               <UserComment 
                    img="https://i.pinimg.com/236x/5c/45/68/5c45680de755f0257b573c92a5f678e1.jpg"
                    username="AA Nanang"
                    comment="nice dude, i like sweety stuff, u should make another sweet stuff recipe"
                />
        </div>
        <Footer />
        </>
    )
}

export default Post;