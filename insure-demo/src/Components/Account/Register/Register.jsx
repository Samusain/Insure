import React, { useEffect } from 'react'
import './Register.css'
import Img1 from '../../../images/logo.svg'
import { useState } from 'react'
import Toaster from '../../Notification/Toaster/Toaster';

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
      }
    
      if (!values.lastname){
        errors.lastname = 'This field is required';
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
          e.preventDefault();
          const errors = validate(values);
          setErrors(errors)
          console.log(errors)
          if(Object.keys(errors).length === 0){
            // e.target.submit();
            console.log(values)
            // localStorage.setItem("myDataArray", JSON.stringify(dataArray));
            localStorage.setItem("userData",  JSON.stringify(values));
            setSuccess('Registration successful!')
          }
        }

        
        
        // localStorage.getItem("lastname");
        // const navigate = useNavigate()

        // useEffect(() => {
        //   if (Object.keys(errors).length === 0) {
        //     navigate('/login');
        //   }
        // }, [errors, navigate]);



  return (
    <div className='register'>
        <form id='signup-form' onSubmit={handleSubmit}>
        <h1><img src={Img1} alt="logo"/></h1>
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
                <input 
                type="password"
                name='password'
                value={values.password}
                onChange={handleChanges}
                />
                <span className='error'>{errors.password}</span>
            </div>
            <div className='inputbox'>
                <label htmlFor="">Confirm Password</label>
                <input 
                type="password"
                name='confirm'
                value={values.confirm}
                onChange={handleChanges}
                />
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