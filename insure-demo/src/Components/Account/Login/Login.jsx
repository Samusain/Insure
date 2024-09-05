import React from 'react'
import './Login.css'
import Img1 from '../../../images/logo.svg'

const Login = () => {
  return (
    <div className='login'>
      <form className="form">
        <h1><img src={Img1} alt="logo"/></h1>
        <div className='inputbox'>
          <label htmlFor="email">Email</label>
          <input type="text" required/>
        </div>
        <div className='inputbox'>
          <label htmlFor="password">Password</label>
          <input type="password" required/>
        </div>
        <button type='submit' className='login-btn'>Login</button>
      </form>
      <p className='signup'>Don't have an account?<a href="/register"> Sign Up</a></p>
    </div>
  )
}

export default Login