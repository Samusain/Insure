import React from 'react'
import './Login.css'
import Img1 from '../../../images/logo.svg'
import { useState } from 'react'

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState('')

  const handleChanges = (e) => {
    setValues( prevState => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const validate = (values) => {
    const errors = {};
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (values.email !== localStorage.values.email) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'This field is required'
  }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    if(Object.keys(errors).length > 0){
        setErrors(errors);
    }
  }

  return (
    <div className='login'>
      <form className="form" onSubmit={handleSubmit}>
        <h1><img src={Img1} alt="logo"/></h1>
        <div className='inputbox'>
          <label htmlFor="email">Email</label>
          <input 
          type="text" 
          name='email'
          value={values.email}
          />
          <span className='error'>{errors.firstname}</span>
        </div>
        <div className='inputbox'>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          name='password'
          value={values.password}
          />
          <span className='error'>{errors.firstname}</span>
        </div>
        <button type='submit' className='login-btn'>Login</button>
      </form>
      <p className='signup'>Don't have an account?<a href="/register"> Sign Up</a></p>
    </div>
  )
}

export default Login