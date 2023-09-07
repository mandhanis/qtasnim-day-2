import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Youtube() {
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/recipes/get/${recipe_id}`)
      .then(response => {
        const fetchedRecipe = response.data;
        setRecipe(fetchedRecipe);
      })
      .catch(error => {
        console.error('Error fetching recipe data:', error);
      });
  }, [recipe_id]);

  function getEmbedIdFromUrl(url) {
    const videoId = url.split("v=")[1];
    return videoId;
  }

  return (
    <div className="mt-5 pt-5">
      {recipe && (
        <div>
          <h2>{recipe.name}</h2>
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${getEmbedIdFromUrl(recipe.vid_url)}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      )}
    </div>
  );
}

export default Youtube;
