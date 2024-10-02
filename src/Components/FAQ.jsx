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
    // {
    //   question: 'Do I tip the housecleaners?',
    //   answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    // },
    // {
    //   question: 'What are your rates for house cleaning services?',
    //   answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque autem aspernatur corrupti ea veniam aperiam, ducimus est odio rem reprehenderit fugiat amet eaque dolores, magnam unde maxime blanditiis! Tenetur?',
    // },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className='text-center mb-[30px] mt-[40px] text-[2rem] font-bold'>
        <h1 className='text-[24px] text-[#7F24C6]'>Frequently Asked Questions</h1>
      </div>

      <div className="max-w-[800px] mx-auto mb-5">
        <style>
          {`
          .faq {
            margin-bottom: 15px;
            border-radius: 10px;
            background-color: white;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            overflow: hidden;
          }

          .faq-question {
            font-size: 15px;
            cursor: pointer;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f5f5f5;
            border-radius: 10px;
            font-weight:600;
          }

          .faq-answer {
            padding: 10px;
            background-color: #f9f9f9;
            border-top: 1px solid #ddd;
            font-size: 16px;
            color: #555;
          }

          .faq-icon {
            transition: transform 0.3s ease-in-out;
          }

          .faq-icon-open {
            transform: rotate(45deg);
          }
          `}
        </style>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className={`faq-icon ${activeIndex === index ? 'faq-icon-open' : ''}`}>
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
