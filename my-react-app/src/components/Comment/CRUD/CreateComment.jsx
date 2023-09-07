import React, { useState } from 'react';
import axios from 'axios';

function CreateComment() {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = () => {
    // Create the comment object
    const newComment = { text: commentText };

    // Send a POST request to create a new comment
    axios.post('http://127.0.0.1:4000/api/comments/post', newComment)
      .then(response => {
        console.log('Comment created:', response.data);
        // Perform any necessary updates or notifications
      })
      .catch(error => {
        console.error('Error creating comment:', error);
      });
  };

  return (
    <div>
      {/* Your form JSX */}
    </div>
  );
}

export default CreateComment;

