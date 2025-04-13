import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import phoneIcon from '../../assets/phone.png';
import locationIcon from '../../assets/location.png';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setMessage('');
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Successfully subscribed.');
      } else if (response.status === 400) {
        setMessage('Email is already subscribed.');
      } else {
        setMessage('Failed to subscribe to the newsletter.');
      }
    } catch (error) {
      setMessage('An error occurred.');
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="footer">
      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lifestyle">Lifestyle</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/phone">Phone</Link></li>
        </ul>
      </div>

      <div className="contact-info">
        <h4>Contact Info</h4>
        <p><img src={locationIcon} alt="Location" className="Location-icon" />Delhi, India</p>
        <p><img src={phoneIcon} alt="Phone" className="Phone-icon" /> +91 xxxxxx</p>
      </div>

      <div className="follow-us">
        <h4>Follow us</h4>
        <a href="https://www.linkedin.com/in/ayush-s-009311238/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" className="Social-icon" />
        </a>
        <a href="https://github.com/Ayushsotiya" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" className="Social-icon" />
        </a>
      </div>

      <form className="subscribe-form" onSubmit={handleSubscribe}>
        <label htmlFor="email"><h4>Subscribe <span className="hide-on-mobile">Our Newsletter</span></h4></label>
        <div className="input-group">
          <input placeholder='Email Address' type="email" id="email" name="email" required value={email} onChange={handleInputChange} />
          <button type="submit">Subscribe</button>
          <div className="message">{message}</div>
        </div>
      </form>

      <div className="rights">
        © {year} E-Utpad Sankalan. All Rights Reserved.
      </div>
    </div>
  );
};
export default Footer;
