import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

const ProfileEdit = () => {
    const [userData, setUserData] = useState({});
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;

      axios
        .get(`http://localhost:4000/users/get/${userId}`)
        .then(response => {
          setUserData(response.data[0]);
          setEditedData(response.data[0]);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;

      axios.put(`http://localhost:4000/users/edit/${userId}`, editedData)
        .then(response => {
          console.log('User data updated successfully:', response.data);
          Swal.fire("Upload!", "Your data has been update.", "success").then(() => {
            window.location.href = "/profile";
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
      
    }
  };
  
  return (
    <>
      <Navbar />.
      <div className="container d-flex justify-content-center mt-5 pt-3">

      <div className="container-edit bg-light d-flex justify-content-center flex-column shadow rounded mt-0">
        <div className="d-flex flex-column align-items-center justify-content-center  mb-3">
          <img
            src={editedData.img_url || ProfileEdit.defaultProps.img_url}
            className="pfp-profile mt-0 rounded-circle"
            alt=""
          />
          <h3 className="mt-3  mx-3">{editedData.name}</h3>
        </div>

          <div className="">
            <form className="form d-flex flex-column justify-content-center align-items-center" method="put">
                <div className=" d-flex">
                    <div className="form-item mt-4 mx-4">
                        <label htmlFor="name">Name</label> <br />
                        <input
                        className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control"
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={editedData.name || ''}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-item mt-4 mx-4">
                        <label htmlFor="email">Email</label> <br />
                        <input
                        className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control"
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={editedData.email || ''}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="form-item mt-4 mx-4">
                        <label htmlFor="phone">Phone Number</label> <br />
                        <input
                        className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control"
                        type="number"
                        name="phone"
                        id="phone"
                        required
                        value={editedData.phone || ''}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="vid form-item mt-4 mx-4">
                        <label htmlFor="img_url">Image URL</label> <br />
                        <input
                        type="text"
                        className="container add-vid border-0 px-4 d-flex align-items-center bs-gray-500 form-control"
                        id="img_url"
                        name="img_url"
                        value={editedData.img_url || ''}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>

             
                <div className="form-item mt-5 pl-5">
                    <input className="submit mx-4" type="submit" value="Update" onClick={handleUpdate} />
                </div>
            </form>
          </div>
      </div>
      </div>


      <Footer />
    </>
  );
};

ProfileEdit.defaultProps = {
    img_url: "https://i.pinimg.com/236x/fb/27/41/fb27417d8671d75fba40a9ddf910d4d7.jpg"
}

export default ProfileEdit;

