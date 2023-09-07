import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:4000/users/login", {
        email,
        password,
      });
      
      const token = response.data.token;

      localStorage.setItem('token', token);

      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;

      window.location.href = "/";
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <div className="form-session-login">
        <div className='title'>
          <h2 style={{color: "#FC6847"}} >Welcome !</h2>
          <h5 className='subtitle'>Log in into your existing account</h5>
        </div>

        <div className='form-login'>
          <form action="/users/login" className="form" method="post" onSubmit={handleLogin}>
            <div className="form-item">
              <label htmlFor='email'>Email</label> <br />
              <input className="form-input" type="email" name="email" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div className="form-item">
              <label htmlFor='password'>Password</label> <br />
              <div className="password-input d-flex">
                <input className="form-input" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="eye">
                  {showPassword ? (
                    <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} className="password-icon" />
                    ) : (
                      <AiOutlineEye onClick={() => setShowPassword(true)} className="password-icon" />
                      )}
                </div>
              </div>
            </div>    
            <div className="box">
              <input type="checkbox" required />
              <p className='sub-check'>I agree to terms & conditions</p>
            </div>
            <div className="form-item">
              <input className="submit" type="submit" value="login" />
            </div>
              <p className="sub-p">Don't have an account?
                <span>
                  <a href="/users/register">Sign in here</a>
                </span>
              </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormLogin;


// import React, { useState } from 'react';
// import axios from 'axios';
// import jwt_decode from "jwt-decode";

// function FormLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post("http://127.0.0.1:4000/users/login", {
//         email,
//         password,
//       });
      
//       const token = response.data.token;

//       localStorage.setItem('token', token);

//       const decodedToken = jwt_decode(token);
//       const userId = decodedToken.id;

//       window.location.href = "/";
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <>
//     <div className="form-session-login">
//        <div className='title'>
//          <h2 style={{color: "#FC6847"}} >Welcome !</h2>
//          <h5 className='subtitle'>Log in into your exiting account</h5>
//        </div>

//        <div className='form-login'>
//          <form action="/users/login" className="form" method="post" onSubmit={handleLogin}>
//            <div className="form-item">
//              <label htmlFor='email'>Email</label> <br />
//              <input className="form-input" type="email" name="email" id="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}  />
//            </div>
//            <div className="form-item">
//              <label htmlFor='password'>Password</label> <br />
//              <input className="form-input" type="password" name="password" id="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
//            </div>    
//            <div className="box">
//              <input type="checkbox" required />
//              <p>I agree to terms & conditions</p>
//            </div>
//            <div className="form-item">
//              <input className="submit" type="submit" value="login" />
//            </div>
//              <p className="sub-p">Don't have any account?
//                <span>
//                  <a href="/users/register">Sign in here</a>
//                </span>
//              </p>
//          </form>
//        </div>
//      </div>

    
//     </>
//   );
// }

// export default FormLogin;


 // /** @format */

// import React from "react";
// import '../style/Login.css'



// export default function FormLogin() { */}
//   return (
//     <div className="form-session-login">
//       <div className='title'>
//         <h2 style={{color: "#FC6847"}} >Welcome !</h2>
//         <h5 className='subtitle'>Log in into your exiting account</h5>
//       </div>

//       <div className='form-login'>
//         <form action="/users/login" class="form" method="post">
//           <div className="form-item">
//             <label htmlFor='email'>Email</label> <br />
//             <input className="form-input" type="email" name="email" id="email" placeholder="Email" require />
//           </div>
//           <div className="form-item">
//             <label htmlFor='password'>Password</label> <br />
//             <input className="form-input" type="password" name="password" id="password" placeholder="Password" require />
//           </div>    
//           <div className="box">
//             <input type="checkbox" />
//             <p>I agree to terms & conditions</p>
//           </div>
//           <div className="form-item">
//             <input className="submit" type="submit" value="login" />
//           </div>
//             <p className="sub-p">Don't have any account?
//               <span>
//                 <a href="/users/register">Sign in here</a>
//               </span>
//             </p>
//         </form>
//       </div>
//     </div>
//   );
// }
// 