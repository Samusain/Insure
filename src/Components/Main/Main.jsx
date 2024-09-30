import React from 'react'
import './Main.css'
import Img1 from '../../images/image-intro-desktop.jpg'
import Img2 from '../../images/bg-pattern-intro-right-desktop.svg'
import Img3 from '../../images/bg-pattern-intro-left-desktop.svg'
import Img4 from '../../images/icon-snappy-process.svg'
import Img5 from '../../images/icon-affordable-prices.svg'
import Img6 from '../../images/icon-people-first.svg'

const Main = () => {
  return (
    <main>
      <section className='human'>
          <img src={Img2} alt="pattern-right" className='pattern-right'/>
        <div className='human-box'>
          <img src={Img1} alt="Intro-right" className="intro-img"/>
          <article className='box'>
            <h1>Humanizing <br/> your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise 
            and technology to help you find the plan that's right for you. Ensure you 
            and your loved ones are protected.</p>
            <a href="/theme">VIEW THEMES</a>
          </article>
        </div>
          <img src={Img3} alt="pattern-left" className='pattern-left'/>
      </section>

      <section className='differ'>
        <div className="differ-container">
          <h2>We're different</h2>
          <div className='differ-articles'>
            <article className='different'>
              <img src={Img4} alt="icon-snappy"/>
              <h3>Snappy Process</h3>
              <p>Our application process can be completed in minutes, not hours. Don't get 
              stuck filling in tedious forms.</p>
            </article>
            <article className='different'>
              <img src={Img5} alt="icon-affordable"/>
              <h3>Affordable Prices</h3>
              <p>We don't want you worrying about high monthly costs. Our prices may be low, 
              but we still offer the best coverage possible.</p>
            </article>
            <article className='different'>
              <img src={Img6} alt="icon-people"/>
              <h3>People First</h3>
              <p>Our plans aren't full of conditions and clauses to prevent payouts. We make 
              sure you're covered when you need it.</p>
            </article>
          </div>
        </div>
      </section>

      <section className='work'>
        <div className="work-container">
          <h4>Find out more about how we work</h4>
          {/* <Link to="insure/about">How we work</Link> */}
          <a href="/about">How we work</a>
        </div>
      </section>
    </main>
    
  )
}

export default Main