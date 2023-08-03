import React from 'react'
import '../style/Register.css'
import FormRegister from '../components/FormRegister'
import Logo from '../style/logo.svg';
console.log(Logo);

export default function Register() {
  return (
    <div className='container'>
        <div className='grid-1'>
          <div className='overlay'>
          <img src={Logo} alt="Logo" className='logojipen' />;
          </div>
        </div>
        <div className='grid-2'>
          <FormRegister/>
        </div>
    </div>
  )
}