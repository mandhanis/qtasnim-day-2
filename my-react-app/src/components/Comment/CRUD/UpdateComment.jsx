import React, { useState } from 'react';
import axios from 'axios';

function UpdateComment({ commentId }) {
  const [updatedText, setUpdatedText] = useState('');

  const handleUpdate = () => {
    // Create the updated comment object
    const updatedComment = { text: updatedText };

    // Send a PUT or PATCH request to update the comment
    axios.put(`http://127.0.0.1:4000/api/comments/edit/${commentId}`, updatedComment)
      .then(response => {
        console.log('Comment updated:', response.data);
        // Perform any necessary updates or notifications
      })
      .catch(error => {
        console.error('Error updating comment:', error);
      });
  };

  return (
    <div>
      {/* Your form JSX */}
    </div>
  );
}

export default UpdateComment;
