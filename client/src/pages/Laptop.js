import React, { useState } from 'react';
import './FAQ.css';
import arrow from '../assets/arrow.svg';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is e-waste, and why is it a concern for laptops and tablets?',
      answer: 'E-waste, or electronic waste, refers to discarded electronic devices. Laptops and tablets contribute to e-waste due to their relatively short lifespan and rapid technological advancements. The improper disposal of these devices can lead to environmental pollution and resource depletion.'
    },
    {
      question: 'How can users responsibly dispose of their old laptops and tablets to minimize e-waste?',
      answer: 'Users can minimize e-waste by recycling old laptops and tablets through designated e-waste recycling programs. Many manufacturers and retailers offer take-back programs or partner with recycling facilities to ensure proper disposal and recycling of electronic devices.'
    },
    {
      question: 'What environmental impact is associated with the extraction of raw materials for laptops and tablets?',
      answer: 'The extraction of raw materials for laptops and tablets involves mining activities, which can lead to deforestation, habitat destruction, and soil and water pollution. Responsible sourcing and recycling initiatives aim to mitigate these environmental impacts.'
    },
    {
      question: 'How can consumers extend the lifespan of their laptops and tablets to reduce e-waste?',
      answer: 'Consumers can extend the lifespan of their devices by performing regular maintenance, upgrading components (such as RAM or storage), and using protective cases. Additionally, proper storage and handling can prevent physical damage and contribute to longer device lifespans.'
    },
    {
      question: 'What are the potential health hazards associated with improper disposal of laptops and tablets?',
      answer: 'Improper disposal of laptops and tablets can lead to the release of hazardous substances like lead, mercury, and cadmium into the environment. These substances pose health risks to humans and ecosystems, emphasizing the importance of proper e-waste management.'
    },
    {
      question: 'How do manufacturers contribute to reducing e-waste in the production of laptops and tablets?',
      answer: 'Manufacturers can reduce e-waste by adopting eco-friendly design practices, implementing modular components for easier repairs and upgrades, and using recycled or responsibly sourced materials. Extended product lifecycles and energy-efficient manufacturing processes also contribute to minimizing environmental impact.'
    },
  ];


  return (
    <div className="faq-container">
      <h1 className="faq-header">FAQ on Laptop & Tablet</h1>
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