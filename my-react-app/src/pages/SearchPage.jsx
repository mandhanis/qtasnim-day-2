import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResults from "../components/Product/SearchResults";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch search results from your API
    axios.get("YOUR_API_ENDPOINT")
      .then((response) => {
        setSearchResults(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, []);

  return (
    <div className="search-page">
      <h1>Search Results</h1>
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
