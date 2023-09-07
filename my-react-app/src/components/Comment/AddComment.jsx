import React, { useState, useEffect } from "react";
import UserComment from "./UserComment";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import jwt_decode from 'jwt-decode';

const AddComment = (props) => {
  const { recipe_id } = useParams();
  const [commentText, setCommentText] = useState('');
  const [postData, setPostData] = useState(null);
  const [user, setUser] = useState(null);
  const [editedData, setEditedData] = useState({});


  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.id;
    }
    return null;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/comments/show/${recipe_id}`)
      .then((response) => {
        setPostData(response.data);
        setEditedData(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching post data:", error);
      });

      const userId = getUserIdFromToken();
      if (userId) {
        setUser({ id: userId });
      }
  }, [recipe_id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      Swal.fire("Please login", "Before posting a comment, please login first.", "info");
      return;
    }

    const newComment = {
      user_id: user.id,
      commenter_id: user.id,
      text: commentText,
      recipe_id: recipe_id,
    };

    axios.post('http://127.0.0.1:4000/comments/post', newComment)
      .then(response => {
        console.log('Comment created:', response.data);
        Swal.fire("Upload!", "Your comment has been uploaded.", "success").then(() => {
          window.location.reload();
        });
      })
      .catch(error => {
        console.error('Error creating comment:', error);
      });
  };

  const handleDelete = (commentId) => {
    
    axios.delete(`http://127.0.0.1:4000/comments/delete/${commentId}`)
      .then(response => {
        console.log('Comment deleted:', response.data);
        window.location.reload();
      })
      .catch(error => {
        console.error('Error deleting comment:', error);
      });
  };

  const handleUpdate = (e, commentId) => {
    e.preventDefault();

      axios.put(`http://localhost:4000/comment/edit/${commentId}`, editedData)
        .then(response => {
          console.log('User data updated successfully:', response.data);
          Swal.fire("Upload!", "Your data has been update.", "success").then(() => {
            window.location.reload();
          });
        })
        .catch(error => {
          console.error('Error updating user data:', error);
          // Show SweetAlert error message
          Swal.fire({
            icon: 'error',
            title: 'Update Failed',
            text: 'An error occurred while updating your profile.',
          });
        })
      
  };

  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-5 pb-5">
      <label className="comment-title align-text-left mx-5 px-5 mb-1" htmlFor="comment">
        Comment:
      </label>
      <form className="form" onSubmit={handleSubmit}>
        <div className="mx-5 px-5 d-flex align-items-center justify-content-center flex-column">
          <textarea
            name="text"
            id="comment"
            title="Comment"
            className="text-comment container-fluid mb-3"
            value={commentText}
            
            onChange={(event) => setCommentText(event.target.value)}
          ></textarea>
          <input type="submit" value="Post" className="btn button" />
        </div>
      </form>
      <label className="comment-user align-text-left mx-5 px-5 mb-1 mt-5" htmlFor="comment">
        Comment
      </label>

      <div className="mb-5 pb-5">
        {postData.map((comment) => (
          <UserComment
            key={comment.commentId} // Make sure to provide a unique key
            data={comment}
            handleUpdate={() => handleUpdate(comment.commentId)}
            handleDelete={() => handleDelete(comment.commentId)}
          />
        ))}
      </div>
    </div>
  );
};

export default AddComment;




// import React, {useState, useEffect} from "react";
// import UserComment from "./UserComment";
// import axios from "axios";
// import { useParams } from 'react-router-dom';


// const  AddComment = (props) => {
//   const { recipe_id } = useParams();
//   const [commentText, setCommentText] = useState('');
//   const [postData, setPostData] = useState(null);


//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newComment = {
//       commenter_id: 1, 
//       text: commentText,
//       recipe_id: recipe_id, 
//     };
   
//     axios.post('http://127.0.0.1:4000/comments/post', newComment)
//       .then(response => {
//         console.log('Comment created:', response.data);
//         window.location.reload();
//       })
//       .catch(error => {
//         console.error('Error creating comment:', error);
//       });
//   };


//   useEffect(() => {
//     axios
//       .get(`http://localhost:4000/comments/show/${recipe_id}`) 
//       .then((response) => {
//         setPostData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching post data:", error);
//       });
//   }, [recipe_id]);  

  
//   const handleDelete = (commentId) => {
//     axios.delete(`http://127.0.0.1:4000/comments/delete/${commentId}`)
//       .then(response => {
//         console.log('Comment deleted:', response.data);
//       })
//       .catch(error => {
//         console.error('Error deleting comment:', error);
//       });
//   };  

//   if (!postData) {
//     return <div>Loading...</div>;
//   }

  
//     return (
//         <div className="mb-5 pb-5">
//         <label className="comment-title align-text-left mx-5 px-5 mb-1" htmlFor="comment">
//           Comment:
//         </label>
//         <form className="form" onSubmit={handleSubmit}>
//         <div className="mx-5 px-5 d-flex align-items-center justify-content-center flex-column">
//           <textarea
//             name="text"
//             id="comment"
//             title="Comment"
//             className="text-comment container-fluid mb-3"
//             value={commentText}
//             onChange={(event) => setCommentText(event.target.value)}
//           ></textarea>
//           <input type="submit" value="Post" className="btn button" />
//         </div>
//       </form>
//         <label className="comment-user align-text-left mx-5 px-5 mb-1 mt-5" htmlFor="comment">
//           Comment
//         </label>

//         <div className="mb-5 pb-5">

//   <h3 className="comment-title align-text-left mx-5 px-5 mb-1" htmlFor="comment">
//   </h3>
//   {postData.map((comment) => (
//               <UserComment data={comment} handleDelete={handleDelete} />
//             ))}

//         </div>
// </div>
      
//     )
// }

// export default AddComment;