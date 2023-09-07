import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import Swal from "sweetalert2";
import jwt_decode from 'jwt-decode';
import Navbar from "../components/Navbar/Navbar";

const AddRecipe = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    sender_id: null, 
    img_url: "",
    vid_url: "",
    description: "",
  });

  useEffect(() => {
    const userId = getUserIdFromToken();
    if (userId) {
      setUser({ id: userId });
      setFormData((prevData) => ({
        ...prevData,
        sender_id: userId,
      }));
    }
  }, []);

  const getUserIdFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.id;
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire("Please login", "Before posting a Recipe, please login first.", "info");
      return;
    }
    axios
      .post("http://127.0.0.1:4000/recipes/post", formData)
      .then((response) => {
        Swal.fire("Upload!", "Your Recipe has been uploaded.", "success").then(() => {
          window.location.href = "/";
        });
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  return (
    <>
      <Navbar />
         <div className="mx-5 pt-5 px-5">
         <form action="/recipes/post" className="form" method="post" onSubmit={handleSubmit} >
             <div className="title form-item">
                 <input type="text" className="container add-title border-0 px-3" name="name" onChange={handleChange} required placeholder="Title" />
             </div>
             <div className="form-item">
                 <textarea className="add-ingre container border-0  p-3 " name="description"   placeholder="Description" required onChange={handleChange}/>
             </div> 
             <div className="form-item">
                 <textarea className="add-ingre container border-0  p-3 " name="ingredients"   placeholder="Ingredients" required onChange={handleChange}/>
             </div> 
             {/* <div className="add-vid container d-flex justify-content-center align-items-center flex-column p-3 form-item"> */}
                 {/* <FiImage style={{fontSize:"3em", color:"grey"}}/>
                 <h5 className="text-secondary mt-2"> Add Image</h5> */}
                 {/* <input type="text" className=" add-title border-0 px-3 bs-gray-500" name="img_url" onChange={handleChange} required placeholder="photo"   />
             </div>  */}
             <div className="vid form-item">
                 <input type="text" className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control" name="img_url" onChange={handleChange}  placeholder="Photo URL" />
             </div>
             <div className="vid form-item">
                 <input type="text" className="container add-vid mt-4 border-0 px-4 d-flex align-items-center bs-gray-500 form-control" name="vid_url" onChange={handleChange}  placeholder="Video URL" />
             </div>
             <div className=" d-flex justify-content-center align-items-center my-5 ">
                 <input type="submit" className="btn button" value="Add Post" />
             </div>
                
         </form> 
         </div>

        
         <Footer />
         </>
  );
};

export default AddRecipe;


//  import React, {useState} from "react";
// import axios from "axios";
// import Footer from "../components/Footer/Footer";
// import Swal from "sweetalert2";
// import jwt_decode from 'jwt-decode';
// // import { FiImage } from "react-icons/fi";    

// const AddRecipe = () => {
//     const [user, setUser] = useState(null);
//     const [formData, setFormData] = useState({
//         id: 1,
//         name: "",
//         ingredients: "",
//         sender_id:  user.id,
//         img_url: "",
//         vid_url: "",
//         description: "",
//       });
      
//       const getUserIdFromToken = () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedToken = jwt_decode(token);
//       return decodedToken.id;
//     }
//     return null;
//   };
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//           ...prevData,
//           [name]: value,
//         }));
//       };
//       const handleSubmit = (e) => {
//         e.preventDefault();
    
//         if (!user) {
//       Swal.fire("Please login", "Before posting a Recipe, please login first.", "info");
//       return;
//     }
//         axios
//           .post("http://127.0.0.1:4000/recipes/post", formData)
//           .then((response) => {
//             Swal.fire("Upload!", "Your Recipe has been uploaded.", "success").then(() => {
//               window.location.href = "/home";
//             });
//           })
//           .catch((error) => {
//             console.error("Error registering:", error);
//           });
//         };
    
    
//     return (
//         <>
//         <div className="mx-5 pt-5 px-5">
//         <form action="/recipes/post" className="form" method="post" onSubmit={handleSubmit} >
//             <div className="title form-item">
//                 <input type="text" className="container add-title border-0 px-3" name="name" onChange={handleChange} required placeholder="Title" />
//             </div>
//             <div className="form-item">
//                 <textarea className="add-ingre container border-0  p-3 " name="description"   placeholder="Description" required onChange={handleChange}/>
//             </div> 
//             <div className="form-item">
//                 <textarea className="add-ingre container border-0  p-3 " name="ingredients"   placeholder="Ingredients" required onChange={handleChange}/>
//             </div> 
//             {/* <div className="add-vid container d-flex justify-content-center align-items-center flex-column p-3 form-item"> */}
//                 {/* <FiImage style={{fontSize:"3em", color:"grey"}}/>
//                 <h5 className="text-secondary mt-2"> Add Image</h5> */}
//                 {/* <input type="text" className=" add-title border-0 px-3 bs-gray-500" name="img_url" onChange={handleChange} required placeholder="photo"   />
//             </div>  */}
//             <div className="vid form-item">
//                 <input type="text" className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control" name="img_url" onChange={handleChange}  placeholder="Photo URL" />
//             </div>
//             <div className="vid form-item">
//                 <input type="text" className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control" name="vid_url" onChange={handleChange}  placeholder="Video URL" />
//             </div>
//             <div className=" d-flex justify-content-center align-items-center my-5 ">
//                 <input type="submit" className="btn button" value="Add Post" />
//             </div>
                
//         </form> 
//         </div>

        
//         <Footer />
//         </>
//     )
// }

// export default AddRecipe;