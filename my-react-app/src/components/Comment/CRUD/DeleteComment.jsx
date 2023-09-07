import React from 'react';
import axios from 'axios';

function DeleteComment({ commentId }) {
  const handleDelete = () => {
    // Send a DELETE request
    axios.delete(`http://127.0.0.1:4000/api/comments/delete/${commentId}`)
      .then(response => {
        console.log('Comment deleted:', response.data);
        // Perform any necessary updates or notifications
      })
      .catch(error => {
        console.error('Error deleting comment:', error);
      });
  };

  return (
    <div>
      {/* Your delete button JSX */}
    </div>
  );
}

export default DeleteComment;
