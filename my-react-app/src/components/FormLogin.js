/** @format */

import React from "react";
import '../style/Login.css'


export default function FormLogin() {
  return (
    <div className="form-session">
      <div className='title'>
        <h2 style={{color: "#FC6847"}} >Welcome !</h2>
        <h5 className='subtitle'>Log in into your exiting account</h5>
      </div>

      <div className='form-login'>
        <form action="/users/login" class="form" method="post">
          <div className="form-item">
            <label htmlFor='email'>Email</label> <br />
            <input className="form-input" type="email" name="email" id="email" placeholder="Email" require />
          </div>
          <div className="form-item">
            <label htmlFor='password'>Password</label> <br />
            <input className="form-input" type="password" name="password" id="password" placeholder="Password" require />
          </div>    
          <div className="box">
            <input type="checkbox" />
            <p>I agree to terms & conditions</p>
          </div>
          <div className="form-item">
            <input className="submit" type="submit" value="login" />
          </div>
            <p className="sub-p">Don't have any account?
              <span>
                <a href="/users/login">Sign in here</a>
              </span>
            </p>
        </form>
      </div>
    </div>
  );
}
