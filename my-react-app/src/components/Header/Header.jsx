import React, { useState } from "react";
import Pict from "../../style/img.png";
  import { FaSearch } from "react-icons/fa";
  import axios from "axios"; // Import axios for making API requests



  const Header = (props) => {
    const [searchQuery, setSearchQuery] = useState(""); // State to store search query
    const [searchResults, setSearchResults] = useState([]); 


    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim() !== "") {
      console.log("Search query:", searchQuery);

      axios
        .get(`http://127.0.0.1:4000/recipes/search?name=${searchQuery}`)
        .then((response) => {
          console.log("Search results:", response.data);
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  };


    return (
      <div className="container-home">
      <div className="cols">
        <h1>Discover Recipe & Delicious Food</h1>
        <br />
        <form onSubmit={handleSearchSubmit}>
          <div className="search-group input-group mb-3 mx-3">
            <span className="search-icon input-group-text border-end-0 bg-white border-black">
              <FaSearch />
            </span>
            <input
              type="text"
              className="search-header form-control bg-white border-start-0 border-black"
              placeholder="Search recipe"
              aria-label="Search recipe"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </form>
      </div>
      <img src={Pict} alt="Pict" className="pict" />
      <div className="cols-2">
        
      </div>
    </div>
  );
};

export default Header;


