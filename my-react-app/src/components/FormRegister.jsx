/** @format */

import React from "react";
import '../style/Login.css'


export default function FormRegister() {
  return (
    <div className="form-session-register">
      <div className='title'>
        <h4 style={{color: "#FC6847"}} >Let’s Get Started !</h4>
        <h6 className='subtitle'>Create new account to access all features</h6>
      </div>

      <div className='form-register'>
        <form action="/users/register" class="form" method="post">
          <div className="form-item">
            <label htmlFor='name'>Name</label> <br />
            <input className="form-input" type="text" name="name" id="name" placeholder="Name" required />
          </div>
          <div className="form-item">
            <label htmlFor='email'>Email</label> <br />
            <input className="form-input" type="email" name="email" id="email" placeholder="Email" require />
          </div>
          <div className="form-item">
            <label htmlFor='phone'>Phone Number</label> <br />
            <input className="form-input" type="number" name="phone" id="phone" placeholder="Phone Number" require />
          </div>
          <div className="form-item">
            <label htmlFor='password'>Password</label> <br />
            <input className="form-input" type="password" name="password" id="password" placeholder="Password" require />
          </div>
          <div className="form-item">
            <label htmlFor='password2'>Confirm Password</label> <br />
            <input className="form-input" type="password" name="password2" id="password2" placeholder="Confirm Password" require />
          </div>
          <div className="box">
            <input type="checkbox" />
            <p>I agree to terms & conditions</p>
          </div>
          <div className="form-item">
            <input className="submit" type="submit" value="Register" />
          </div>
            <p className="sub-p">Already Registered? 
              <span>
                <a href="/login">Log in here</a>
              </span>
            </p>
        </form>
      </div>
    </div>
  );
}
