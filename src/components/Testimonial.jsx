import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardsData = [
  { id: 1, title: 'Bhoopendra N Pandey', profile: 'Communicator & Excellent Managerial Person', contribution: 'Frontend Development', mobile: '123-456-7890', photo: 'images/bhupendra.jpg', description: 'Experienced web developer specializing in frontend technologies like React, Vue, and Angular. Proficient in JavaScript, HTML, CSS.' },
  { id: 2, title: 'Shri Kamlesh Raghuvanshi', profile: 'National President(Lok Utthan Pehal Foundation)', contribution: 'Visual Design', mobile: '987-654-3210', photo: 'images/kamlesh.jpg', description: 'Creative graphic designer with a passion for visual storytelling. Skilled in Adobe Photoshop, Illustrator, and InDesign.' },
  { id: 3, title: 'Preeti Raghuvanshi', profile: 'Communicator & Excellent Managerial Person', contribution: 'Data Analysis', mobile: '456-789-0123', photo: 'images/preeti.jpg', description: 'Data analyst with expertise in statistical analysis, data visualization, and Python programming. Loves turning data into actionable insights.' },
  { id: 4, title: 'Dr. Rishi M Bhatnagar', profile: 'Entrepreneur & Technology expert', contribution: 'SEO Content', mobile: '321-654-9870', photo: 'images/Rishi.jpg', description: 'Proficient content writer with years of experience in SEO writing, blog content, and copywriting. Passionate about crafting engaging stories.' },
  { id: 5, title: 'Prashant Kumar', profile: 'Full Stack Devloper', contribution: 'SEO & Social Media', mobile: '654-321-0987', photo: 'images/pk.jpg', description: 'Digital marketer with experience in SEO, SEM, and social media management. Focused on increasing brand visibility and engagement.' },
  { id: 5, title: 'Ayush Tiwari', profile: 'UX/UI and Development', contribution: 'UI and Devlopment', mobile: '654-321-0987', photo: 'images/ayush.jpg', description: 'Digital marketer with experience in SEO, SEM, and social media management. Focused on increasing brand visibility and engagement.' },
];

const Testimonial = () => {
  const sliderRef = useRef(null); // Ref to access the slider
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Display 3 slides at a time
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide on slide change
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Wrap around logic for middle card
  const getMiddleIndex = () => {
    const totalSlides = cardsData.length;
    return (currentSlide + 1) % totalSlides; // Wrap around the array to target the middle card
  };

  return (


    <div className='w-4/5 m-auto relative' style={{ height: '750px' }}>
      <div className='flex justify-center items-center text-[#7F24C6] font-bold text-[3rem] '><u>Testimonials</u></div>
      <div className='mt-20'>
        <Slider ref={sliderRef} {...settings}>
          {
            cardsData.map((d, index) => (
              <div
                key={d.id}
                className={`bg-white h-[550px] text-black rounded-xl border-2 border-indigo-500 transition-transform duration-300 ${getMiddleIndex() === index ? 'scale-110 z-10' : 'scale-95 z-0'
                  }`} // Scale the card based on the middle index
              >
                <div className='flex flex-col justify-center test-content '>
                  <div className='h-56 rounded-t-xl flex justify-center items-center relative '>
                    <div className="absolute border-dashed border-4 border-[#f08725] rounded-full h-49 w-49 flex justify-center items-center ">
                      <div className="border-4 border-white rounded-full h-52 w-52 flex justify-center items-center">
                        <img src={d.photo} alt={d.title} className='h-48 w-48 rounded-full' />
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-2xl font-bold text-indigo-500'>{d.title}</p>
                    <p className='font-semibold'>{d.profile}</p>
                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>

        {/* Custom Arrow Buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" onClick={() => sliderRef.current.slickPrev()}>
          <button className="bg-indigo-500 text-white p-2 rounded-full">⬅</button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" onClick={() => sliderRef.current.slickNext()}>
          <button className="bg-indigo-500 text-white p-2 rounded-full">➡</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;