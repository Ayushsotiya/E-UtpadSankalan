import React, { useState } from 'react';
import './FAQ.css';
import arrow from '../assets/arrow.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is e-waste?',
      answer: 'E-waste refers to discarded electronic devices like computers, smartphones, and appliances. These items contain hazardous materials and should be properly recycled to prevent environmental pollution.'
    },
    {
      question: 'How to recycle e-waste?',
      answer: 'Many cities have e-waste collection locations where you can drop off your unwanted electronics. Some electronics manufacturers and retailers also offer take-back programs.'
    },
    {
      question: 'Why is e-waste a concern?',
      answer: 'E-waste poses environmental and health risks due to toxic substances like lead and mercury. Inadequate disposal can contaminate soil and water, harming ecosystems and human health.'
    },
    {
      question: ' E-waste recycling methods?',
      answer: 'After you recycle your e-waste, it\'s sent to a recycling facility where it\'s safely disassembled and sorted. The valuable materials are then recovered for reuse.'
    },
    {
      question: 'How can we reduce e-waste?',
      answer: 'Reducing e-waste involves making products that are easier to repair, have longer lifespans, and are made from more sustainable materials. Consumers can also take steps to extend the life of their devices.'
    },
    {
      question: 'How can e-waste be managed?',
      answer: 'E-waste recycling involves processes like dismantling, shredding and extracting valuable materials such as metals, plastics, and glass. Advanced technologies are continually being developed to improve efficiency.'
    },
    {
      question: 'Final word on e-waste recycling near you',
      answer: 'If you have you been Googling “e-waste recycling near me” but are yet to find the nearest one? Look no further than E Utpad Sankalan! We offer nearest e-waste collection centre locator.'
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently Asked Questions</h1>
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