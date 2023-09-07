import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReadComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments using a GET request
    axios.get('http://127.0.0.1:4000/api/comments/get')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <div>
      {/* Display comments */}
    </div>
  );
}

export default ReadComments;
