import React from 'react'
import './Register.css'
import Img1 from '../../../images/logo.svg'
import { useState } from 'react'
import Toaster from '../../Notification/Toaster/Toaster'
import { useNavigate } from "react-router-dom"
import { FaEyeSlash, FaEye } from "react-icons/fa"

const nameRegex = /^[a-zA-Z' -]{2,}$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/

const Register = () => {

    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        address: '',
        email: '',
        password: '',
        confirm: ''
    })

    const [errors, setErrors] = useState({})

    const [success, setSuccess] = useState('')

    const [showPassword, setShowPassword] = useState(true)
    const [showConfirm, setShowConfirm] = useState(true)

    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues( prevState => ({
          ...prevState, [e.target.name]: e.target.value
        }));
        setErrors({});
    }

    const validate = (values) => {
        const errors = {};
      if (!values.firstname){
        errors.firstname = 'This field is required';
      } else if (!nameRegex.test(values.firstname)){
        errors.firstname = 'Invalid name';//Create a strict regex!!
      }
    
      if (!values.lastname){
        errors.lastname = 'This field is required';
      } else if (!nameRegex.test(values.lastname)){
        errors.lastname = 'Invalid name';//Create a strict regex!!
      }
    
      if (!values.address){
        errors.address = 'This field is required';
      }
    
      if (!values.email) {
        errors.email = 'This field is required';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'This field is required'
      } else if (!passwordRegex.test(values.password)) {
        errors.password = 'Password is not strong enough'
      } else if(values.password.length < 8){
        errors.password = 'Password must be at least 8 characters long'
      }

      if (!values.confirm) {
        errors.confirm = 'This field is required';
      } else if(values.confirm !== values.password){
        errors.confirm = 'Password does not match'
      } 

        return errors;
      }

      const handleSubmit = (e) => {
          e.preventDefault()
          const errors = validate(values)
          setErrors(errors)
          
          if(Object.keys(errors).length === 0){
            // e.target.submit();
            console.log(values)
            localStorage.setItem("userData",  JSON.stringify(values));
            setSuccess('Registration successful!')
            setTimeout(() => {
              navigate("/login");
            }, 5000);
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

        const visibleConfirm = () => {
          const confirm = document.getElementById('confirm');
          if(showConfirm){
              confirm.classList.remove('see')
              confirm.type = 'text'
          } else {
              confirm.classList.add('see');
              confirm.type = 'password'
          }
        }


  return (
    <div className='register'>
        <form className='form' onSubmit={handleSubmit}>
        <h1><a href='/'><img src={Img1} alt="logo"/></a></h1>
        <div className=''>
            <div className='inputbox'>
                <label htmlFor="firstname">Firstname</label>
                <input 
                type="text"
                name='firstname'
                value={values.firstname}
                onChange={handleChanges}
                />
                <span className='error'>{errors.firstname}</span>
            </div>

            <div className='inputbox'>
                <label htmlFor="lastname">Lastname</label>
                <input 
                type="text"
                name='lastname'
                value={values.lastname}
                onChange={handleChanges}
                />
                <span className='error'>{errors.lastname}</span>
            </div>

            <div className='inputbox'>
                <label htmlFor="address">Address</label>
                <input 
                type="text"
                name='address'
                value={values.address}
                onChange={handleChanges}
                />
                <span className='error'>{errors.address}</span>
            </div>
        </div>
        <div className=''>
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
                <label htmlFor="">Password</label>
                <div className="visible-box">
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
            <div className='inputbox'>
                <label htmlFor="">Confirm Password</label>
                <div className="visible-box">
                  <input 
                  type="password"
                  name='confirm'
                  id='confirm'
                  value={values.confirm}
                  onChange={handleChanges}
                  />
                  <div className='visible'>
                    {showConfirm === true?
                      <FaEyeSlash className='unsee' onClick={() => {
                        setShowConfirm(!showConfirm);
                        visibleConfirm()
                      }}/>
                      :
                      <FaEye onClick={() => {
                          setShowConfirm(!showConfirm);
                          visibleConfirm()
                      }}/>
                    }
                  </div>
                </div>
                <span className='error'>{errors.confirm}</span>
            </div>
          </div>
            <button className='login-btn'>Sign Up</button>
        </form>
        {success? <Toaster successMsg={success}/> 
        : 
        <></>
        }
        <p className='signup'>Already have an account?<a href='/login'>Login</a></p>
    </div>
  )
}

export default Register