import React, { useState } from 'react';
import './FAQ.css';
import arrow from '../assets/arrow.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Why is e-waste a concern for phones?',
      answer: 'Phones contribute significantly to e-waste due to their short lifespan and frequent upgrades. The rapid pace of technological advancements leads to the disposal of old phones, posing environmental challenges if not managed properly.'
    },
    {
      question: 'How can phones be recycled to reduce e-waste?',
      answer: 'Phones can be recycled through specialized e-waste recycling programs. These programs dismantle phones, extract valuable materials, and dispose of hazardous components safely. Many phone manufacturers also offer take-back programs for old devices.'
    },
    {
      question: 'What environmental impact does improper disposal of phones have?',
      answer: 'Improper disposal of phones can lead to environmental pollution. The hazardous substances in phones, such as lead, mercury, and cadmium, can contaminate soil and water, posing risks to ecosystems and human health.'
    },
    {
      question: 'How can consumers reduce e-waste from phones?',
      answer: 'Consumers can reduce e-waste by extending the lifespan of their phones through proper maintenance and upgrades. Additionally, donating or selling old phones, participating in recycling programs, and choosing eco-friendly disposal methods contribute to waste reduction.'
    },
    {
      question: 'Are there regulations in place to address e-waste from phones?',
      answer: 'Many countries have implemented regulations to manage e-waste, including phones. These regulations often require manufacturers to take responsibility for the proper disposal and recycling of electronic devices.'
    },
    {
      question: 'What are some innovations in phone design to reduce e-waste?',
      answer: 'Manufacturers are adopting modular design and using recyclable materials in phone production. Modular phones allow users to replace individual components, extending the device lifespan. Sustainable materials contribute to reducing the environmental impact.'
    },
    {
      question: 'How can phone manufacturers promote sustainable practices?',
      answer: 'Phone manufacturers can adopt eco-friendly production methods, use recycled materials, and invest in research for sustainable technologies. Implementing take-back programs and raising awareness about e-waste among consumers are also crucial steps.'
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-header">FAQ on Phones</h1>
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