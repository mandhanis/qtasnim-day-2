import React from 'react'
import '../style/Login.css'
import FormRegister from '../components/FormRegister'
import Logo from '../style/logo.svg';

export default function Register() {

  return (
    <div className='d-flex'>
        <div className='grid-1'>
          <div className='overlay'>
          <img src={Logo} alt="Logo" className='logojipen' />
          </div>
        </div>
        <div className='grid-2'>
          <FormRegister className=""/>
        </div>
    </div>
  )
}