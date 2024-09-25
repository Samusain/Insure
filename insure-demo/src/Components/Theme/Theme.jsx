import React from 'react'
import './Theme.css'
import Mainlayout from '../../Components/Mainlayout/Layout'
import Img1 from '../../images/images/icon-facebook1.svg'
import Img2 from '../../images/images/icon-twitter1.svg'
import Img3 from '../../images/images/icon-instagram1.svg'
import Img4 from '../../images/images/icon-youtube1.svg'
import Img5 from '../../images/images/icon-up.svg'
import Img6 from '../../images/images/icon-down.svg'
import ToggleState from '../Recoil/ToggleState'
import { useRecoilState } from 'recoil'

const Theme = () => {

    const [theme, setTheme] = useRecoilState(ToggleState) 

  return (
    <Mainlayout>
        <div className={theme=== true? "theme dark-theme":'theme'}>
            <section className='social-top'>
                <div className="head">
                    <article className="head-title">
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                    </article>
                    <div>
                        <label className="switch">
                            <input 
                            type="checkbox"
                            onClick={()=>setTheme(!theme)}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    
                </div>
                <div className="topcontainer">
                    <div className="follow-fbook">
                        <p><img src={Img1} alt="icon-facebook"/>@nathanf</p>
                        <article className="followers">
                        <h2>1987</h2>
                        <p>FOLLOWERS</p>
                        </article>
                        <p className="green"><img src={Img5} alt="icon-up"/>12 Today</p>
                    </div>
                    <div className="follow-twit">
                        <p><img src={Img2} alt="icon-twitter"/>@nathanf</p>
                        <article className="followers">
                        <h2>1044</h2>
                        <p>FOLLOWERS</p>
                        </article>
                        <p className="green"><img src={Img5} alt="icon-up"/>99 Today</p>
                    </div>
                    <div className="follow-ig">
                        <p><img src={Img3} alt="icon-instagram"/>@realnathanf</p>
                        <article className="followers">
                        <h2>11k</h2>
                        <p>FOLLOWERS</p>
                        </article>
                        <p className="green"><img src={Img5} alt="icon-up"/>1099 Today</p>
                    </div>
                    <div className="follow-ytube">
                        <p><img src={Img4} alt="icon-youtube"/>Nathan F.</p>
                        <article className="followers">
                        <h2>8239</h2>
                        <p>SUBSCRIBERS</p>
                        </article>
                        <p className="red"><img src={Img6} alt="icon-down"/>144 Today</p>
                    </div>
                </div>
            </section>
            <section className="overview">
                <h3>Overview - Today</h3>
                    <div className="firstbox">
                        <div className="overview-box">
                            <article className="detail">
                            <p>Page Views</p>
                            <h4>87</h4>
                            </article>
                            <div className="numbers">
                            <img src={Img1} alt="icon-facebook" className="fbook"/>
                            <p className="green"><img src={Img5} alt="icon-up"/>3%</p>
                            </div>
                        </div>
                        <div className="overview-box">
                            <article className="detail">
                            <p>Likes</p>
                            <h4>52</h4>
                            </article>
                            <div className="numbers">
                            <img src={Img1} alt="icon-facebook" className="fbook"/>
                            <p className="red"><img src={Img6} alt="icon-down"/>2%</p>
                            </div>
                        </div>
                        <div className="overview-box">
                            <article className="detail">
                            <p>Likes</p>
                            <h4>5462</h4>
                            </article>
                            <div className="numbers">
                            <img src={Img3} alt="icon-instagram" className="ig"/>
                            <p className="green"><img src={Img5} alt="icon-up"/>2257%</p>
                            </div>
                        </div>
                        <div className="overview-box">
                            <article className="detail">
                            <p>Profile Views</p>
                            <h4>52k</h4>
                            </article>
                            <div className="numbers">
                            <img src={Img3} alt="icon-instagram" className="ig"/>
                            <p className="green"><img src={Img5} alt="icon-up"/>1375%</p>
                            </div>
                        </div>
                    </div>
                    <div className="firstbox">
                        <div className="overview-box">
                            <article className="detail">
                                <p>Retweets</p>
                                <h4>117</h4>
                            </article>
                            <div className="numbers">
                                <img src={Img2} alt="icon-twitter" className="twitter"/>
                                <p className="green"><img src={Img5} alt="icon-up"/>303%</p>
                            </div>
                        </div>
                        <div className="overview-box">
                            <article className="detail">
                                <p>Likes</p>
                                <h4>507</h4>
                            </article>
                            <div className="numbers">
                                <img src={Img2} alt="icon-twitter" className="twitter"/>
                                <p className="green"><img src={Img5} alt="icon-up"/>553%</p>
                            </div>
                        </div>
                        <div className="overview-box">
                            <article className="detail">
                                <p>Likes</p>
                                <h4>107</h4>
                            </article>
                            <div className="numbers">
                                <img src={Img4} alt="icon-youtube" className="ytube"/>
                                <p className="red"><img src={Img6} alt="icon-down"/>19%</p>
                            </div>
                        </div>
                        <div className="overview-box">
                            <article className="detail">
                                <p>Total Views</p>
                                <h4>1407</h4>
                            </article>
                            <div className="numbers">
                                <img src={Img4} alt="icon-youtube" className="ytube"/>
                                <p className="red"><img src={Img6} alt="icon-down"/>12%</p>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    </Mainlayout>
  )
}

export default Theme