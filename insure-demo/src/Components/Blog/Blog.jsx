import React from 'react'
import Mainlayout from '../../Components/Mainlayout/Layout'
import './Blog.css'

const Blog = () => {
  return (
    <Mainlayout>
        <div className='blog'>
            <h1>Our Blog</h1>
            <div className='blog-one'>
                <article className='tips'>
                    <h2>Top 5 Insurance Myths Debunked</h2>
                    <p>Insurance can be complex, and misinformation often leads to misunderstandings about coverage, costs, and benefits. Let's debunk some of the most common insurance myths to help you make informed decisions about your policies.</p>
                </article>
                <article className='insight'>
                    <h2>The Future of Insurance: Emerging Trends and Technologies</h2>
                    <p>At Insure, we pride ourselves on not just providing insurance policies but also on being a supportive partner in our clients' journeys. In this blog, we share a compelling story of how we helped a local business through a challenging situation, demonstrating our commitment to providing exceptional service and tailored solutions.</p>
                </article>
            </div>
            <div className='blog-one'>
                <article className='tips'>
                    <h2>How to File an Insurance Claim: Step-by-Step Instructions</h2>
                    <p>Filing an insurance claim can seem daunting, but knowing the right steps to take can make the process smoother and less stressful. Whether you've experienced a car accident, property damage, or another covered event, here's a step-by-step guide to help you through the claims process.</p>
                </article>
                <article className='insight'>
                    <h2>New Insurance Regulations You Should Know About</h2>
                    <p>Insurance regulations are frequently updated to address emerging risks, protect consumers, and adapt to changing economic and social conditions. Staying informed about new regulations can help you make better decisions about your insurance coverage and ensure compliance with legal requirements. Here's a closer look at some recent insurance regulations that could impact you:</p>
                </article>
            </div>
        </div>
    </Mainlayout>
  )
}

export default Blog