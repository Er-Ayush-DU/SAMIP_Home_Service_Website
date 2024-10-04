import React, { useState } from 'react';

const cardsData = [
  { id: 1, title: 'Bhoopendra N Pandey', profile: 'Communicator & Excellent Managerial Person', contribution: 'Frontend Development', mobile: '123-456-7890', photo: 'images/bhupendra.jpg', description: 'Experienced web developer specializing in frontend technologies like React, Vue, and Angular. Proficient in JavaScript, HTML, CSS.' },
  { id: 2, title: 'Shri Kamlesh Raghuvanshi', profile: 'National President(Lok Utthan Pehal Foundation)', contribution: 'Visual Design', mobile: '987-654-3210', photo: 'images/kamlesh.jpg', description: 'Creative graphic designer with a passion for visual storytelling. Skilled in Adobe Photoshop, Illustrator, and InDesign.' },
  { id: 3, title: 'Preeti Raghuvanshi', profile: 'Communicator & Excellent Managerial Person', contribution: 'Data Analysis', mobile: '456-789-0123', photo: 'images/preeti.jpg', description: 'Data analyst with expertise in statistical analysis, data visualization, and Python programming. Loves turning data into actionable insights.' },
  { id: 4, title: 'Dr. Rishi M Bhatnagar', profile: 'Entrepreneur & Technology expert', contribution: 'SEO Content', mobile: '321-654-9870', photo: 'images/Rishi.jpg', description: 'Proficient content writer with years of experience in SEO writing, blog content, and copywriting. Passionate about crafting engaging stories.' },
  { id: 5, title: 'Prashant Kumar', profile: 'Digital Marketer', contribution: 'SEO & Social Media', mobile: '654-321-0987', photo: 'images/pk.jpg', description: 'Digital marketer with experience in SEO, SEM, and social media management. Focused on increasing brand visibility and engagement.' },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null); // Modal state
  const [isAnimating, setIsAnimating] = useState(false); // Animation state
  const cardCount = cardsData.length;

  const handleNext = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
      setIsAnimating(false); // Reset animation state
    }, 500); // Match the duration of the CSS transition
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cardCount) % cardCount);
      setIsAnimating(false);
    }, 500);
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
    <div className="bg-[#f2f2f2] h-[850px] w-screen flex flex-col gap-16 overflow-hidden">
      <h2 className="text-center font-semibold text-5xl mt-[80px] text-indigo-800">Testimonials</h2>

      <div className="relative flex justify-center items-center overflow-hidden">
        <button
          className="absolute left-0 bg-gray-800 text-white p-2 rounded-full transition-transform duration-800"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Cards */}
        <div
          className={`grid grid-cols-3 gap-4 transition-transform duration-500 ease-in-out overflow-hidden ${isAnimating ? 'animate-slide-right' : ''
            }`}
        >
          {displayedCards.map((card, index) => (
            <div
              key={card.id}
              className={`w-[400px] h-[590px] bg-white flex flex-col items-center gap-6 pt-16 rou rounded-2xl cursor-pointer transition-all duration-700 ease-in-out ${index === 1 ? 'scale-[104px] z-10 rounded-2xl' : 'scale-95 z-0'
                } ${isAnimating && index === 2 ? 'animate-slide-in-right' : ''}`}
              onClick={() => setExpandedCard(card)} // Set clicked card to modal data
              
            >
              <div className="h-[200px] w-[200px] bg-white rounded-full flex justify-center items-center relative border-2 border-blue-500 border-dashed">
                <div className="h-[182px] w-[182px] bg-[#FAE084] rounded-full overflow-hidden">
                  <img src={card.photo} alt="" className='object-cover' />
                </div>
              </div>
              <div className="mt-4 text-center text-2xl font-bold text-indigo-800">{card.title}</div>
              <div className="text-justify px-5 font-[500]">{card.profile}</div>
              <div className="text-justify px-5">{card.description}</div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      {/* Expanded Card */}
      {expandedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
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