import React from 'react'
import './About.css'
import Mainlayout from '../Mainlayout/Layout'
import Img1 from '../../images/connect.jpg'
import { useState } from 'react'

const About = () => {

  const [transit, setTransit] = useState(false)
  const fadeIn = () => {
    if(transit){
      setTransit(true)
    } else {
      setTransit(false)
    }
  }

  return (
    <Mainlayout>
        <div className='about'>
          <h1>HOW WE WORK</h1>
          <section className='mission'>
              <article className='aim'>
                <h2>Our Mission</h2>
                <p>At Insure, our mission is to provide comprehensive, personalized insurance solutions that empower our clients to face life's uncertainties with confidence and peace of mind. We are committed to delivering exceptional service through integrity, transparency, and innovation, ensuring that every individual and business receives the protection and support they need. Our goal is to build lasting relationships based on trust and reliability, safeguarding our clients' futures while helping them navigate the complexities of risk management.</p>
              </article>
          </section>
          <section className='insured'>
              <article className='be-insured'>
                <h3>We make sure you are Insured</h3>
                <p>Our team of experts will work with you to create a customized plan that meets your
                unique needs and goals. We'll take care of the details, so you can focus on what
                matters most. Being insured is more than just a safety net; it's a fundamental part of financial stability and peace of mind. Insure will act as a protective barrier against unforeseen events and potential risks, whether they are health-related, accidents, or property damage. We will provide a cushion that can absorb the financial shock of unexpected incidents, allowing you to focus on recovery and rebuilding rather than the stress of financial strain.</p>
              </article>
              <img src={Img1} alt="insure-mission" className='mission-img'/>
          </section>
        </div>

    </Mainlayout>
  )
}

export default About