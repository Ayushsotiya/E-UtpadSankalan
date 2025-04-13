import React from 'react';
import { Link } from 'react-router-dom';
import './TextNavbar.css';

const FactBar = () => {
  return (
    <section className="TextNavbar">
      <div className="fact-content overflow-hidden">
        <p>If you're facing delay in requests, then it's likely due to the free Render instance I'm utilizing.</p>
      </div>
      <div className="learn-more">
        <Link className="learn-more-link" to="/faq">Learn More</Link>
      </div>
    </section>
  );
};
 
export default FactBar;