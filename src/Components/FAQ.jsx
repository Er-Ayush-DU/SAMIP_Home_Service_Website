import React, { useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How do I pay for my cleaning service?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    },
    {
      question: 'Are the cleaning teams trained and supervised?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    },
    {
      question: 'Will I always have the same cleaning team?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    },
    {
      question: 'Can my animals be out while my house is being cleaned?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    },
    {
      question: 'Is your cleaning service guaranteed?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    },
    {
      question: 'Do I tip the housecleaners?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    },
    {
      question: 'What are your rates for house cleaning services?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className='text-center mb-[30px] mt-[40px] text-[2rem] text-lg uppercase font-bold text-[#7F24C6] overflow-hidden'>
        <h1 className='overflow-hidden'>Frequently Asked Questions ?</h1>
      </div>
      <div>
        <style>
          {`
          .faq {
            margin-bottom: 20px;
            margin-left: 150px;
          }

          .faq-question {
            
            font-size:16px;
            cursor: pointer;
            font-weight:600;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .faq-icon {
            font-size: 18px;
            margin-left: 10px;
            margin-right: 150px;
            transition: transform 0.3s ease-in-out;
          }

          .faq-answer {
            font-family:Poppins;
            width: 80vw;
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
          }
        `}
        </style>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
