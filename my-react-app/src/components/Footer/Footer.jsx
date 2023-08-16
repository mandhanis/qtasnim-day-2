import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = (props) => {
    
    return (
        <div className="footer d-flex justify-content-center align-items-center flex-column gap-5 pt-5 mt-5">
          <div className="text d-flex justify-content-center align-items-center flex-column gap-5 pt-4">
            <h1>Masak, Mangan, Wareg</h1>
            <p>Share your best recipe by uploading here !</p>
            <div className="foot mt-5 d-flex">
              <li>
                <Link to="/home" className="text-decoration-none">Product</Link>
              </li>
              <li>
                <Link to="/login">Company</Link>
              </li>
              <li>
                <Link to="/register">Learn More</Link>
              </li>
              <li>
                <Link to="/register">Get In Touch</Link>
              </li>
            </div>
          </div>
        </div>
      
    )
}

export default Footer;