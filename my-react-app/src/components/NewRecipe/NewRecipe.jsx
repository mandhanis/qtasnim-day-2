import React, { useEffect, useState} from "react";
import Title from "../Title/Title";
import './NewRecipe.css'
import TitleWithButton from "../Button/TitleWithButton";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewRecipe = (props) => {
    const { recipe_id } = useParams();
    const [postData, setPostData] = useState(null);

    useEffect(() => {
    axios
      .get(`http://localhost:4000/recipes/rec`)
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
            <div className=" new-section">
            <Title title="New Recipe" className="title-new-recipe mr-5" />
            <div className="img-stuff">
                <div className="orange-stuff"></div>
                <img src={postData[0].img_url} alt="New Recipe" className="new-img" />
            </div>
            <div className="title-new">
                <TitleWithButton  titleName={postData[0].name} titleBody={postData[0].description} link={postData[0].id} />
            </div>
        </div>
      
        </>
    )
}

export default NewRecipe;