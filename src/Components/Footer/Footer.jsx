import React from 'react'
import './Footer.css'
import Logo from '../../images/logo.svg'
import Facebook from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'

const Footer = () => {

  return (
      <footer>
        <div className='footer-container'>
          <div className='top'>
            <a href="/"><img src={Logo} alt="logo"/></a>
            <div className='footer-img'>
              <a href="www.facebook.com"><img src={Facebook} alt="facebook-icon"/></a>
              <a href="www.twitter.com"><img src={Twitter} alt="twitter-icon" /></a>
              <a href="www.pinterest.com"><img src={Pinterest} alt="pinterest-icon" /></a>
              <a href="www.instagram.com"><img src={Instagram} alt="instagram-icon" /></a>
            </div>
          </div>
          <div className="links">
            <ul>
              <li><a href="/about">OUR COMPANY</a>
                  <ul>
                    <li><a href='/about'>HOW WE WORK</a></li>
                    <li><a href="/about">WHY INSURE?</a></li>
                    <li><a href="/theme">VIEW THEME</a></li>
                    <li><a href="/">REVIEWS</a></li>
                  </ul>
              </li>
              <li><a href="/blog">HELP ME</a>
                  <ul>
                    <li><a href="/blog">FAQ</a></li>
                    <li><a href="/">TERMS OF USE</a></li>
                    <li><a href="/">PRIVACY POLICY</a></li>
                    <li><a href="/">COOKIES</a></li>
                  </ul>
              </li>
              <li><a href="/">CONTACT</a>
                  <ul>
                    <li><a href="/">SALES</a></li>
                    <li><a href="/">SUPPORT</a></li>
                    <li><a href="/">LIVE CHAT</a></li>
                  </ul>
              </li>
              <li><a href="/">OTHERS</a>
                  <ul>
                    <li><a href="/">CAREERS</a></li>
                    <li><a href="/">PRESS</a></li>
                    <li><a href="/">LICENSES</a></li>
                  </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    
  )
}

export default Footer