import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardsData = [
  { id: 1, title: 'Bhoopendra N Pandey', profile: 'Communicator & Excellent Managerial Person', contribution: 'Frontend Development', mobile: '123-456-7890', photo: 'images/bhupendra.jpg', description: 'Experienced web developer specializing in frontend technologies like React, Vue, and Angular. Proficient in JavaScript, HTML, CSS.' },
  { id: 2, title: 'Shri Kamlesh Raghuvanshi', profile: 'National President(Lok Utthan Pehal Foundation)', contribution: 'Visual Design', mobile: '987-654-3210', photo: 'images/kamlesh.jpg', description: 'Creative graphic designer with a passion for visual storytelling. Skilled in Adobe Photoshop, Illustrator, and InDesign.' },
  { id: 3, title: 'Preeti Raghuvanshi', profile: 'Communicator & Excellent Managerial Person', contribution: 'Data Analysis', mobile: '456-789-0123', photo: 'images/preeti.jpg', description: 'Data analyst with expertise in statistical analysis, data visualization, and Python programming. Loves turning data into actionable insights.' },
  { id: 4, title: 'Dr. Rishi M Bhatnagar', profile: 'Entrepreneur & Technology expert', contribution: 'SEO Content', mobile: '321-654-9870', photo: 'images/Rishi.jpg', description: 'Proficient content writer with years of experience in SEO writing, blog content, and copywriting. Passionate about crafting engaging stories.' },
  { id: 5, title: 'Prashant Kumar', profile: 'Full Stack Developer', contribution: 'SEO & Social Media', mobile: '654-321-0987', photo: 'images/pk.jpg', description: 'Digital marketer with experience in SEO, SEM, and social media management. Focused on increasing brand visibility and engagement.' },
  { id: 6, title: 'Ayush Tiwari', profile: 'UX/UI and Development', contribution: 'UI and Development', mobile: '654-321-0987', photo: 'images/ayush.jpg', description: 'Digital marketer with experience in SEO, SEM, and social media management. Focused on increasing brand visibility and engagement.' },
];

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to handle middle card scaling
  const getMiddleIndex = () => {
    const totalSlides = cardsData.length;
    return (currentSlide + 1) % totalSlides; // Calculate index for scaling
  };

  const closeExpandedCard = () => {
    setExpandedCard(null); // Close expanded view
  };


  return (
    <>
      <div className="flex justify-center items-center text-[#7F24C6] font-bold text-[3rem]">
        <u>Testimonials</u>
      </div>

      <div className="w-4/5 m-auto relative" style={{ height: "750px" }}>
        <div className="mt-20">
          <Slider ref={sliderRef} {...settings}>
            {cardsData.map((d, index) => (
              <div
                key={d.id}
                className={`bg-[#f2f2f2] h-[550px] text-black rounded-xl border-2 border-indigo-500 transition-transform duration-300 overflow-hidden 
                ${getMiddleIndex() === index ? 'scale-10 z-10' : 'scale-95 z-0'}`}
                
              >
                <div className="flex flex-col justify-center test-content overflow-hidden">
                  {/* Profile image with fixed dimensions and border */}
                  <div className="h-56 rounded-t-xl flex justify-center items-center relative">
                    <div className="absolute border-dashed border-4 border-[#f08725] rounded-full h-52 w-52 flex justify-center items-center">
                      <div className="border-4 border-white rounded-full h-48 w-48 flex justify-center items-center">
                        <img
                          src={d.photo}
                          alt={d.title}
                          className="h-44 w-44 rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content with proper text wrapping */}
                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-2xl font-bold text-[#2F2BF6] text-center whitespace-normal">
                      {d.title}
                    </p>
                    <p className="font-semibold text-center whitespace-normal">
                      {d.profile}
                    </p>
                    <button
                      className="bg-[#2F2BF6] text-white text-lg px-6 py-1 rounded-xl test-button"
                      onClick={() => setExpandedCard(d)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrow Buttons */}
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <button className="bg-indigo-500 text-white p-2 rounded-full">⬅</button>
          </div>
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            onClick={() => sliderRef.current.slickNext()}
          >
            <button className="bg-indigo-500 text-white p-2 rounded-full">➡</button>
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
                    <h2 className="text-3xl font-bold overflow-hidden text-[#2F2BF6]"><u>{expandedCard.title}</u></h2>
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
      </div>
    </>
  );
};

export default Testimonial;