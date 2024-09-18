import React from 'react'
import './Dashboard.css'
import { useState } from 'react'
import Toaster from '../Notification/Toaster/Toaster'


const Dashboard = () => {

  const [success, setSuccess] = useState('')
  const [warning, setWarning] = useState('')

  const logoutUser = () => {
    const loggedOut = localStorage.getItem('userData')
    if(loggedOut){
      localStorage.removeItem('userData') 
      setSuccess('User logged out successfully');
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    } else {
      setWarning('User has already logged out!')
    }
  };

  return (
    <div className='dashboard'>
      <button className='logout' onClick={logoutUser}>Logout</button>
      <div className='board'>
        <h1>Welcome <br/> To <br/>Dashboard</h1>
        <button className='begin'>Get Started</button>
      </div>
      {success? 
        <Toaster successMsg={success}/>
        :
        <Toaster warningMsg={warning}/>
        }
    </div>
  );
}

export default Dashboard