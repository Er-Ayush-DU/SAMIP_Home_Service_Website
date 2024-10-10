import React, { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: ' What is the purpose of the SAMIP Software?',
      answer: 'The app is designed to simplify communication, management, and daily operations for residents, RWAs (Resident Welfare Associations), and staff. It provides features for tracking issues, managing activities, and accessing essential services easily.',
    },
    {
      question: ' How do I register on the app?',
      answer: 'You can register by downloading the app and following the on-screen instructions. You will need to provide your mobile number, email, and resident details to verify your membership within the society.',
    },
    {
      question: ' Can workers and staff use the app?',
      answer: 'Yes, workers and staff can use the app to manage their tasks, view schedules, and update their work status. They can also communicate with the RWA and residents when necessary.',
    },
    {
      question: 'How secure is the app?',
      answer: 'The app ensures data security with encryption protocols and secure login features. Only authorized residents, RWAs, and workers have access to specific information, keeping user data safe and private.',
    },
    {
      question: 'Can I pay my society maintenance through the app?',
      answer: 'Yes, the app provides a secure payment gateway for paying society maintenance fees, utility bills, and other charges. You can track payment history and get receipts for every transaction.',
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
        <h1 className='text-[24px] text-[#7F24C6]'>Frequently Asked Questions ?</h1>
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

          
          `}
        </style>
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              <span>{faq.question}</span>
              <span className={`faq-icon ${activeIndex === index ? 'faq-icon-open' : ''}`}>
                {activeIndex === index ? <CiCircleMinus className='font-bold'/>
                  : <CiCirclePlus className='font-bold' />}
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
