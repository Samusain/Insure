import React from 'react'
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header/>
            <div className="progress">{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout