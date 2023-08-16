import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import LogoLogin from './style/logo-nav.svg';
import Post from "./pages/Post";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";
import Video from "./pages/Video";


export default function App() {
  return (
    <Router>  
      <div>
        <nav>
          <ul className="navbar">
            <div>
            <li>
              <img src={LogoLogin} alt="LogoLogin" className='logonav' />
            </li>
            </div>
            <div className="nav mt-3">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/add-recipe">Add Recipe</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </div>
          </ul>
        </nav>
        <Routes >
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post-1" element={<Post />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/video" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}