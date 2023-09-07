import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
// import Post from "../../pages/Post";
// import AddRecipe from "../../pages/AddRecipe";
// import Profile from "../../pages/Profile";
// import Video from "../../pages/Video";
// import SearchResults from "../Product/SearchResults";

export default function LogRegRoute() {
  return (
    <Router>
      <div>
        <Routes >
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

