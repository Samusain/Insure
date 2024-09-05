import React from 'react'
import './Register.css'
import Img1 from '../../../images/logo.svg'

const Register = () => {
  return (
    <div className='register'>
        <form className='signup-form'>
        <h1><img src={Img1} alt="logo"/></h1>
        <div className=''>
            <div className='inputbox'>
                <label htmlFor="firstname">Firstname</label>
                <input type="text"/>
            </div>
            <div className='inputbox'>
                <label htmlFor="lastname">Lastname</label>
                <input type="text"/>
            </div>
            <div className='inputbox'>
                <label htmlFor="address">Address</label>
                <input type="text"/>
            </div>
        </div>
        <div className=''>
            <div className='inputbox'>
                <label htmlFor="email">Email</label>
                <input type="text"/>
            </div>
            <div className='inputbox'>
                <label htmlFor="">Password</label>
                <input type="password"/>
            </div>
            <div className='inputbox'>
                <label htmlFor="">Confirm Password</label>
                <input type="password"/>
            </div>
        </div>
            <button className='login-btn' href='/login'>Sign Up</button>
        </form>
        <p className='signup'>Already have an account?<a href="/login">Login</a></p>
    </div>
  )
}

export default Register