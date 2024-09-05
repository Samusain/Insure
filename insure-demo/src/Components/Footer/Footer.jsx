import React from 'react'
import './Footer.css'
import Logo from '../../images/logo.svg'
import Facebook from '../../images/icon-facebook.svg'
import Twitter from '../../images/icon-twitter.svg'
import Pinterest from '../../images/icon-pinterest.svg'
import Instagram from '../../images/icon-instagram.svg'

const Footer = () => {
  // const hoverImg = () => {
    
  // }
  


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
              <li><a href="/">OUR COMPANY</a>
                  <ul>
                    <li><a href='insure/about'>HOW WE WORK</a></li>
                    <li><a href="/">WHY INSURE?</a></li>
                    <li><a href="/">VIEW PLANS</a></li>
                    <li><a href="/">REVIEWS</a></li>
                  </ul>
              </li>
              <li><a href="/">HELP ME</a>
                  <ul>
                    <li><a href="/">FAQ</a></li>
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
        /* Our company

  
  Why Insure?
  View plans
  Reviews

  Help me

  FAQ
  Terms of use
  Privacy policy
  Cookies

  Contact

  Sales
  Support
  Live chat

  Others

  Careers
  Press
  Licenses */
  /* <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Samolino</a>.
  </div> */
    
  )
}

export default Footer