import React from 'react'
import './Login.css'
import Img1 from '../../../images/logo.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toaster from '../../Notification/Toaster/Toaster'
import { FaEyeSlash, FaEye } from "react-icons/fa"
import Loading from '../../Load/Loading'
// import BackgroundModal from '../../BackgroundModal/BackgroundModal'


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  
  const [errors, setErrors] = useState('');
  console.log(errors);
  
  const [success, setSuccess] = useState('')
  const [err, setErr] = useState('')
  const [warning, setWarning] = useState('')


  const [showPassword, setShowPassword] = useState(true)

  
  const navigate = useNavigate()

  const handleChanges = (e) => {
    setValues( prevState => ({
      ...prevState, [e.target.name]: e.target.value
    }))
  }

  const validate = (values) => {
    const errors = {};
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!emailRegex.test(values.email)) {
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
    setErrors(errors);
    if(Object.keys(errors).length === 0){
      const storedUserData = localStorage.getItem('userData')
      const userId = Math.random();
      
      if(storedUserData){
        const userData = JSON.parse(storedUserData)
        if(values.email === userData.email && values.password === userData.password){
          setSuccess('Login successful');
          setTimeout(() => {
            navigate("/dashboard");
          }, 3000);
          localStorage.setItem('sessionId', userId);
        } else {
          setErr('Invalid email or password')
        }
      } else {
        setWarning("User credentials not found")
      }
    }
  }

    const visible = () => {
      const password = document.getElementById('password');
      if(showPassword){
          password.classList.remove('see')
          password.type = 'text'
      } else {
          password.classList.add('see');
          password.type = 'password'
      }
    }

  return (
    <div className='login'>
      <form className="form" onSubmit={handleSubmit}>
        <h1><a href="/"><img src={Img1} alt="logo"/></a></h1>
        <div className='inputbox'>
          <label htmlFor="email">Email</label>
          <input 
          type="text" 
          name='email'
          value={values.email}
          onChange={handleChanges}
          />
          <span className='error'>{errors.email}</span>
        </div>
        <div className='inputbox'>
          <label htmlFor="password">Password</label>
          <div className='visible-box'>
            <input 
            type="password" 
            name='password'
            id='password'
            value={values.password}
            onChange={handleChanges}
            />
            <div className='visible'>
            {showPassword === true?
                    <FaEyeSlash className='unsee' onClick={() => {
                      setShowPassword(!showPassword);
                      visible()
                    }}/>
                    :
                    <FaEye onClick={() => {
                        setShowPassword(!showPassword);
                        visible()
                    }}/>
                }
            </div>
          </div>
          <span className='error'>{errors.password}</span>
        </div>
        <button className='login-btn'>Login</button>
      </form>
      <p className='signup'>Don't have an account?<a href="/register"> Sign Up</a></p>
      <div className='bounce'>
        {success?
          <Loading/> 
            :
          <Toaster errorMsg={err}/>
        }
      </div>
        {success? 
          <Toaster successMsg={success}/>
          :
          <Toaster errorMsg={err}/>
        }
        {warning?
        <Toaster warningMsg={warning}/>
        :
        <></>
        }
    </div>
  )
}

export default Login