import React from 'react'
import './Header.css'
import Logo from '../../images/logo.svg'
import  {LuMenu} from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { useState } from 'react'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    
    const menuDown = () => {
        if(showMenu){
            const dropMenu = document.getElementById('Menu');
            dropMenu.classList.remove('drop-menu');
        } else {
            const dropMenu = document.getElementById('Menu');
            dropMenu.classList.add('drop-menu');
        }
    }

  return (
    <header>
        <a href="/insure"><img src={Logo} alt="logo" className='logo'/></a>
        <nav className='menu' id='Menu'>
            <ul>
                <li><a href='/about'>HOW WE WORK</a></li>
                <li><a href="/blog">BLOG</a></li>
                <li><a href="/login">ACCOUNT</a></li>
            </ul>
            <button href='/' className='plans'>VIEW THEMES</button>
        </nav>
            <div className='menu-box'>
                {showMenu === false?
                    <LuMenu id='Burger' className='burger' onClick={() => {
                        setShowMenu(!showMenu);
                        menuDown()
                    }}/>
                :
                    <IoClose id='Closebtn' className='closebtn' onClick={() => {
                        setShowMenu(!showMenu);
                        menuDown()
                    }}/>
                }

            </div>
                
    </header>
  )
}

export default Header