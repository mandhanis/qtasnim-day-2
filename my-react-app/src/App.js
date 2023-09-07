import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Post from "./pages/Post";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import jwt_decode from "jwt-decode";
import ProfileEdit from "./pages/ProfileEdit";
import MyRecipe from "./components/Product/MyRecipe";

export default function App() {
  const env = process.env.REACT_APP_JIPEN;
  const data = localStorage.getItem('token');
  const decodedToken = data ? jwt_decode(data) : null;
  const exp = decodedToken?.exp;
  console.log(data);
  const currentDate = Math.floor(Date.now() / 1000);

  useEffect(() => {
    if (exp === undefined || exp < currentDate) {
      localStorage?.removeItem('token');
  
      if (window.location.pathname !== "/users/login" && window.location.pathname !== "/users/register") {
        window.location.href = "/users/login";
      }
    }
  }, [exp, currentDate]);

  return (
    <Router>
      <Routes >
           <Route path="/" element={<Home />} />
           <Route path="/users/login" element={<Login />} />
           <Route path="/users/register" element={<Register />} />
           <Route path="/recipes/:recipe_id" element={<Post />} />
           <Route path="/add-recipe" element={<AddRecipe />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/video/:recipe_id" element={<Video />} />
           <Route path="/users/edit" element={<ProfileEdit />} />
           <Route path="/profile/my-recipe" element={<MyRecipe />} />
           {/* <Route path="/recipes/result" element={<SearchResults />} /> */}
         </Routes>
    </Router>
  );
}
