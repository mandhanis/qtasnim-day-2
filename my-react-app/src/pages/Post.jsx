import React, { useState, useEffect } from "react";
import axios from "axios";
import VidButton from "../components/Button/VidButton";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import AddComment from "../components/Comment/AddComment";
import Navbar from "../components/Navbar/Navbar";
import UserPost from "../components/Users/UserPost";
import { AiFillHeart } from "react-icons/ai";


const Post = () => {
  const { recipe_id } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/recipes/show/${recipe_id}`)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });
  }, [recipe_id]);

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container-post container d-flex justify-content-center align-items-center flex-column mt-2 ">
        <h1>{postData[0].name}</h1>

        <img
          src={postData[0].img_url}
          className="recipe-img rounded mt-3 shadow"
          alt={postData[0].name}
        />
        <label class="add-fav">
          <input type="checkbox" />
          <i class="icon-heart">
            <i class="icon-plus-sign"></i>
          </i>
        </label>
      </div>
      <div className="px-5 mx-5">
        <p>{postData[0].description}</p>
      </div>
      <div className="ingre-sec px-5 mx-5 gap-5 d-flex flex-column">
        <h3 className="ingre-title">Ingredients</h3>
        <ul className="ingre d-flex flex-column gap-4 mb-3">
          {postData[0].ingredients ? (
            postData[0].ingredients
              .split(",")
              .map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))
          ) : (
            <li>No ingredients available.</li>
          )}
        </ul>
      </div>
      <div className="">
        <h3 className="ingre-title mb-5 px-5 mx-5 mt-5">Video Step</h3>
        <VidButton recipe_id={postData.id} />
      </div>
      <div className="">
        <UserPost data={postData[0]} />
      </div>
      <div className="mb-5 pb-5">
        <AddComment />
      </div>
      <Footer />
    </>
  );
};

export default Post;
