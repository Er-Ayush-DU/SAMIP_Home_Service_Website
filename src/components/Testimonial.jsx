import React, { useState } from 'react';

const cardsData = [
  { id: 1, title: 'John Doe', profile: 'Web Developer', contribution: 'Frontend Development', mobile: '123-456-7890', photo: 'https://via.placeholder.com/150', description: 'Experienced web developer specializing in frontend technologies like React, Vue, and Angular. Proficient in JavaScript, HTML, CSS.' },
  { id: 2, title: 'Jane Smith', profile: 'Graphic Designer', contribution: 'Visual Design', mobile: '987-654-3210', photo: 'https://via.placeholder.com/150', description: 'Creative graphic designer with a passion for visual storytelling. Skilled in Adobe Photoshop, Illustrator, and InDesign.' },
  { id: 3, title: 'Samuel Green', profile: 'Data Analyst', contribution: 'Data Analysis', mobile: '456-789-0123', photo: 'https://via.placeholder.com/150', description: 'Data analyst with expertise in statistical analysis, data visualization, and Python programming. Loves turning data into actionable insights.' },
  { id: 4, title: 'Emily White', profile: 'Content Writer', contribution: 'SEO Content', mobile: '321-654-9870', photo: 'https://via.placeholder.com/150', description: 'Proficient content writer with years of experience in SEO writing, blog content, and copywriting. Passionate about crafting engaging stories.' },
  { id: 5, title: 'Michael Brown', profile: 'Digital Marketer', contribution: 'SEO & Social Media', mobile: '654-321-0987', photo: 'https://via.placeholder.com/150', description: 'Digital marketer with experience in SEO, SEM, and social media management. Focused on increasing brand visibility and engagement.' },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null); // Modal state
  const cardCount = cardsData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardCount) % cardCount);
  };

  const displayedCards = [
    cardsData[(currentIndex) % cardCount],
    cardsData[(currentIndex + 1) % cardCount],
    cardsData[(currentIndex + 2) % cardCount],
  ];

  // Handle Modal Close
  const closeExpandedCard = () => {
    setExpandedCard(null); // Close expanded view
  };


  return (
    <div className="bg-emerald-400 h-[850px] w-screen flex flex-col gap-16 overflow-hidden">
      <h2 className="text-center font-semibold text-5xl mt-[105px]">Testimonials</h2>

      <div className="relative flex justify-center items-center overflow-hidden">
        <button
          className="absolute left-0 bg-gray-800 text-white p-2 rounded-full transition-transform duration-800"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Cards */}
        <div
          className="flex gap-4 transition-transform duration-700 ease-in-out"
        >
          {displayedCards.map((card) => (
            <div
              key={card.id}
              className="w-[400px] h-[600px] bg-white flex flex-col items-center gap-6 pt-16 rounded-2xl cursor-pointer"
              onClick={() => setExpandedCard(card)} // Set clicked card to modal data
            >
              <div className="h-[200px] w-[200px] bg-white rounded-full flex justify-center items-center relative border-2 border-blue-500 border-dashed">
                <div className="h-[182px] w-[182px] bg-[#FAE084] rounded-full"></div>
              </div>
              <div className="mt-4 text-center text-2xl font-bold">{card.title}</div>
              <div className="text-justify px-5">{card.profile}</div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-4 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      {/* Expanded Card */}
      {expandedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-2xl w-[800px] text-left relative">
            {/* Close Button (Cross) */}
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-gray-600 cursor-pointer overflow-hidden"
              onClick={closeExpandedCard}
            >
              &times;
            </button>

            <div className="flex gap-6">
              {/* Left section with photo */}
              <div className="h-[150px] w-[150px] bg-white rounded-full flex justify-center items-center border-2 border-blue-500 border-dashed">
                <img src={expandedCard.photo} alt={expandedCard.title} className="h-[140px] w-[140px] rounded-full object-cover" />
              </div>
              {/* Right section with details */}
              <div>
                <h2 className="text-3xl font-bold overflow-hidden">{expandedCard.title}</h2>
                <p className="text-xl"><strong>Profile:</strong> {expandedCard.profile}</p>
                <p className="text-xl"><strong>Contribution:</strong> {expandedCard.contribution}</p>
                <p className="text-xl"><strong>Mobile:</strong> {expandedCard.mobile}</p>
              </div>
            </div>
            {/* Full description */}
            <div className="mt-6 text-lg">
              {expandedCard.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;

