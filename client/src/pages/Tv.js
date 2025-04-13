import React, { useState } from 'react';
import './FAQ.css';
import arrow from '../assets/arrow.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is e-waste in the context of TVs and smart home devices?',
      answer: 'Electronic waste, or e-waste, for TVs and smart home devices refers to the discarded electronic equipment such as televisions, smart speakers, thermostats, and other connected devices. Proper management is crucial due to the presence of hazardous materials.'
    },
    {
      question: 'Which components of TVs and smart home devices can be recycled?',
      answer: 'Several components in TVs and smart home devices can be recycled, including metals, plastics, and certain electronic parts. Recycling programs often target valuable materials like copper, aluminum, and circuit boards.'
    },
    {
      question: 'How can consumers recycle old TVs and smart home devices responsibly?',
      answer: 'Consumers can participate in electronic recycling programs, offered by local waste management facilities or electronic retailers. Some manufacturers also provide take-back programs or recycling options for their products.'
    },
    {
      question: 'Are there regulations governing the disposal of TVs and smart home devices?',
      answer: 'Many regions have regulations in place to manage the disposal of electronic waste, including TVs and smart home devices. These regulations often outline proper recycling practices and may hold manufacturers responsible for the end-of-life management of their products.'
    },
    {
      question: 'Can TVs and smart home devices be refurbished to extend their lifespan?',
      answer: 'Yes, refurbishing involves repairing and restoring devices to working condition. It can extend the lifespan of TVs and smart home devices, reducing the need for new production and minimizing e-waste.'
    },
    {
      question: 'Are there specific considerations for recycling smart home devices with built-in AI or personal data storage?',
      answer: 'Yes, devices with AI or personal data storage should be handled with extra care. Manufacturers and recyclers should have processes in place to ensure data security and privacy compliance during the recycling process.'
    },
    {
      question: 'How can consumers contribute to reducing e-waste from TVs and smart home devices?',
      answer: 'Consumers can choose products with eco-friendly certifications, participate in recycling programs, donate or sell old devices, and educate themselves on proper disposal methods for electronic waste. Being mindful of the environmental impact of electronics consumption is essential.'
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-header">FAQ on TV & Smart Home</h1>
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