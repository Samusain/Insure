import React from 'react';
import './Dashboard.css';
import { useState } from 'react';
import Toaster from '../Notification/Toaster/Toaster';
import Logout from '../Logout/Logout'
import '../Logout/Logout.css'
import BackgroundModal from '../BackgroundModal/BackgroundModal';

const Dashboard = () => {
  const [success, setSuccess] = useState('');
  const [warning, setWarning] = useState('');
  

  const logoutUser = () => {
    const loggedOut = localStorage.getItem('sessionId');
    if (loggedOut) {
      localStorage.removeItem('sessionId');
      setSuccess('User logged out successfully');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setWarning('User has already logged out!');
    }
  };

  return (
    <div className="dashboard">
      <header>
        <h1>Welcome to the Dashboard</h1>
        <button className="logout" onClick={logoutUser}>
          Logout
        </button>
      </header>
        <Logout/>
        <BackgroundModal/>
      <main>
        <section className="board">
          <h2>Get Started</h2>
          <button className="begin">Explore Features</button>
          <p>Learn how to use our platform to its full potential.</p>
          <ul>
            <li>
              <span>Watch our tutorial videos</span>
              <p>Get started with our interactive video guides.</p>
            </li>
            <li>
              <span>Read our documentation</span>
              <p>Dive into our comprehensive user manual.</p>
            </li>
            <li>
              <span>Join our community</span>
              <p>Connect with other users and get help from our support team.</p>
            </li>
          </ul>
        </section>
        <section className="stats">
          <h2>Statistics</h2>
          <ul>
            <li>
              <span>Users:</span> 100
            </li>
            <li>
              <span>Posts:</span> 500
            </li>
            <li>
              <span>Comments:</span> 1000
            </li>
            <li>
              <span>Average engagement:</span> 20%
            </li>
            <li>
              <span>Top performing post:</span> "New feature release!"
            </li>
          </ul>
          <button className="view-more">View more statistics</button>
        </section>
        <section className="news">
          <h2>Latest News</h2>
          <ul>
            <li>
              <span>New feature released!</span>
              <p>We've just released a new feature that allows you to customize your dashboard.</p>
            </li>
            <li>
              <span>Security update</span>
              <p>We've updated our security measures to ensure your data is safe and secure.</p>
            </li>
            <li>
              <span>Upcoming event</span>
              <p>Join us for our annual user conference on March 15th!</p>
            </li>
            <li>
              <span>New integration</span>
              <p>We've integrated with popular tool XYZ to enhance your workflow.</p>
            </li>
          </ul>
          <button className="view-more">View more news</button>
        </section>
        <section className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <span>Account settings</span>
              <p>Update your profile and account information.</p>
            </li>
            <li>
              <span>Billing and payments</span>
              <p>Manage your subscription and payment methods.</p>
            </li>
            <li>
              <span>Support center</span>
              <p>Get help from our support team and knowledge base.</p>
            </li>
            <li>
              <span>Feedback and suggestions</span>
              <p>Share your thoughts and ideas with us.</p>
            </li>
          </ul>
        </section>
        <section className="featured-content">
          <h2>Featured Content</h2>
          <ul>
            <article>
              {/* <img src="https://via.placeholder.com/150" alt="Featured image" /> */}
              <h3>How to boost your productivity</h3>
              <p>Learn how to optimize your workflow and get more done in less time.</p>
            </article>
            <article>
              {/* <img src="https://via.placeholder.com/150" alt="Featured image" /> */}
              <h3>The benefits of using our platform</h3>
              <p>Discover how our platform can help you achieve your goals.</p>
            </article>
          </ul>
        </section>
      </main>
      {success ? (
        <Toaster successMsg={success} />
      ) : ( 
        <Toaster warningMsg={warning} />
      )}
    </div>
  )
}

export default Dashboard