import React, { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";    
import Footer from "../components/Footer/Footer";
import LogoutButton from "../components/Button/LogoutButton";
import Navbar from "../components/Navbar/Navbar";
import jwt_decode from "jwt-decode";
import axios from "axios";
import MyRecipe from "../components/Product/MyRecipe";
import { Route, NavLink, Routes } from "react-router-dom";

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwt_decode(token);
            const userId = decodedToken.id;

            axios
                .get(`http://localhost:4000/users/get/${userId}`)
                .then((response) => {
                    setUserData(response.data[0]);
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                });
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="profile container d-flex justify-content-center align-items-center flex-column">
                {userData && (
                    <>
                        <img src={userData.img_url || Profile.defaultProps.img_url} className="pfp-profile rounded-circle" alt="user" />
                        <a href="/users/edit" className="edit">
                            <AiOutlineEdit className=""/>
                        </a>
                        <h4 className="mt-2">{userData.name}</h4>
                    </>
                )}
            </div>
            <div className="mx-5 border-bottom pb-2">
                <NavLink to="/profile/my-recipe" className="text-black mx-3">My Recipe</NavLink>
                <NavLink to="/profile/saved-recipe" className="text-black mx-3">Saved Recipe</NavLink>
                <NavLink to="/profile/liked-recipe" className="text-black mx-3">Liked Recipe</NavLink>
            </div>
            <div className="d-flex mx-0 flex-row gap-4">
                <Routes>
                    <Route path="/profile/my-recipe" element={<MyRecipe />} />
                    {/* Add similar routes for Saved Recipe and Liked Recipe components */}
                </Routes>
                <MyRecipe />
            </div>
            <LogoutButton />
            <Footer />
        </>
    );
}

Profile.defaultProps = {
    img_url: "https://i.pinimg.com/236x/fb/27/41/fb27417d8671d75fba40a9ddf910d4d7.jpg"
}

export default Profile;
