import React, { useState } from 'react';
import './FAQ.css';
import arrow from '../assets/arrow.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What are lifestyle equipment?',
      answer: 'Lifestyle equipment refers to products and devices designed to enhance and improve various aspects of daily life, including health, leisure, and personal well-being.'
    },
    {
      question: 'How can one maintain and care for fitness equipment?',
      answer: 'Regular maintenance of fitness equipment involves cleaning, lubricating moving parts, and checking for wear and tear. Follow the manufacturer  guidelines for specific care instructions to ensure longevity and optimal performance.'
    },
    {
      question: 'What eco-friendly practices can be adopted when using lifestyle equipment?',
      answer: 'Adopting eco-friendly practices with lifestyle equipment includes choosing energy-efficient appliances, recycling materials, and opting for sustainable and responsibly sourced products to minimize environmental impact.'
    },
    {
      question: 'How do smart home devices contribute to a modern lifestyle?',
      answer: 'Smart home devices enhance modern lifestyles by providing convenience, automation, and connectivity. These devices can control lighting, temperature, security, and entertainment systems, making daily routines more efficient and enjoyable.'
    },
    {
      question: 'What role does technology play in the design of ergonomic furniture?',
      answer: 'Technology contributes to the design of ergonomic furniture by enabling the creation of adjustable and customizable features. This allows users to tailor furniture to their unique needs, promoting comfort and well-being.'
    },
    {
      question: 'Can lifestyle equipment be recycled, and how?',
      answer: 'Yes, many lifestyle equipment items can be recycled. To recycle, check with local waste management facilities for guidelines on proper disposal. Some manufacturers also offer take-back programs for recycling or refurbishing old equipment.'
    },
    {
      question: 'How can individuals make sustainable choices when purchasing lifestyle equipment?',
      answer: 'To make sustainable choices, individuals can opt for products made from eco-friendly materials, choose energy-efficient appliances, and support brands committed to ethical and sustainable manufacturing practices.'
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-header">FAQ on LifeStyle Equipments</h1>
      <p className='faq-tagline'>Find answers to your most common questions about e-waste management.</p>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button className="faq-button" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {faq.question}
            <img className={`arrow ${openIndex === index ? 'up' : ''}`} src={arrow} alt="arrow" />
          </button>
          <p className={`answer ${openIndex === index ? 'open' : ''}`}>{faq.answer}</p>
          <hr className="horizontal-line" />
        </div>
      ))}
    </div>
  );
};

export default FAQ;