/** @format */
import React, { useState } from "react";
import "../style/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


export default function FormRegister() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    pass2: "",
  });

  const [errors, setErrors] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = [];

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.pass2
    ) {
      newErrors.push({ message: "Please enter all fields" });
    }
    if (formData.password !== formData.pass2) {
      newErrors.push({ message: "Password doesn't match" });
    }
    if (formData.password.length < 6) {
      newErrors.push({ message: "Password should be at least 6 characters" });
    }

    if (newErrors.length > 0) {
      // Set the popup message and make it visible
      setPopupMessage(newErrors[0].message);
      setPopupVisible(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setPopupVisible(false);
      }, 3000);

      return;
    }
    const { name, email, phone, password } = formData;
    console.log(formData);
    axios
      .post("http://127.0.0.1:4000/users/register", { name, email, phone, password })
      .then((response) => {
        console.log("Registration successful:", response.data);
        navigate("/users/login");
      })
      .catch((error) => {
        console.error("Error registering:", error);
      });
  };

  return (
    <div className="form-session-register">
      {popupVisible && <div className="popup">{popupMessage}</div>}

      <div className="title">
        <h4 style={{ color: "#FC6847" }}>Let’s Get Started !</h4>
        <p className="subtitle">Create new account to access all features</p>
      </div>

      <div className="form-register">
        <form
          action="/users/register"
          className="form"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="form-item">
            <label htmlFor="name">Name</label> <br />
            <input
              className="form-input"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label> <br />
            <input
              className="form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="phone">Phone Number</label> <br />
            <input
              className="form-input"
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label> <br />
            <div className="password-input d-flex">
              <input
                className="form-input"
                type={showPassword ? 'text' : 'password'} 
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
                <div className="eye">
                  {showPassword ? (
                    <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} className="password-icon" />
                    ) : (
                      <AiOutlineEye onClick={() => setShowPassword(true)} className="password-icon" />
                      )}
                </div>
              </div>
           
          </div>
          <div className="form-item">
            <label htmlFor="pass2">Confirm Password</label> <br />
            <div className="password-input d-flex">
              <input
                className="form-input"
                type={showPass2 ? 'text' : 'password'} 
                name="pass2"
                id="pass2"
                placeholder="Password"
                required
                onChange={handleChange}
              />
                <div className="eye">
                  {showPass2 ? (
                    <AiOutlineEyeInvisible onClick={() => setShowPass2(false)} className="password-icon" />
                    ) : (
                      <AiOutlineEye onClick={() => setShowPass2(true)} className="password-icon" />
                      )}
                </div>
              </div>
          </div>
          <div className="box">
            <input type="checkbox" required />
            <p className="sub-check"> I agree to terms & conditions</p>
          </div>
          <div className="form-item">
            <input className="submit" type="submit" value="Register" />
          </div>
          <p className="sub-p">
            Already Registered?
            <span>
              <a href="/users/login">Log in here</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
