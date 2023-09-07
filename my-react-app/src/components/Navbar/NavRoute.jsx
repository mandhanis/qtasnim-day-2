import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Post from "../../pages/Post";
import AddRecipe from "../../pages/AddRecipe";
import Profile from "../../pages/Profile";
import Video from "../../pages/Video";
// import SearchResults from "../Product/SearchResults";

export default function NavRoute() {
  return (
      <div>
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/recipes/:recipe_id" element={<Post />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/video/:recipe_id" element={<Video />} />
          {/* <Route path="/recipes/result" element={<SearchResults />} /> */}

        </Routes>
      </div>

  );
}
