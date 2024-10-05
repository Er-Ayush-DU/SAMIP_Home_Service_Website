import { MdArrowCircleRight } from 'react-icons/md'; // Importing the arrow-circle-right icon from Material Design Icons

const Goals = () => {
  return (
    <>
      <div className="w-screen mb-10">
        <div className="text-style mt-10 text-center h-auto text-3xl font-bold text-[#7F24C6]">

          <div className="Simplify_security">Simplify Your Society Life with Trusted</div>
          <div className="Simplify_security">Security and Reliable Services</div>

        </div>

        <div className="flex justify-around px-7 mt-7">
          <div className="container">
            <div className="box1 relative">
              <img src="images/goals.jpg" alt="" className="absolute top-0 left-0 object-cover object-center w-full h-full goals-img" />
            </div>

            {/* Our Goals Section */}
            <div className="box2 mt-[-25px] pb-2">
              <div className="overflow-hidden flex items-center justify-center text-indigo-800">
                <u className="overflow-hidden">Our Goals</u>
              </div>
              <div className="inner-font pt-6 text-justify px-5 text-[1rem] font-medium max-h-full overflow-auto">
                <ol className="space-y-6">
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">Our mission starts with societies, where daily visitors like maids, and occasional ones like courier staff, enter the premises to meet residents' needs.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">RWA (Society Management) handles many tasks to benefit residents, but the real challenge isn't funds—it's ensuring transparency and relevance.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">Apart from providing services to residents, their prime and utmost concern is security.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">Residents need an easy, single platform to access information, report queries and complaints, and ensure financial transparency.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">On the other hand, workers need to be technically trained which is one of SAMIP tasks.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="box2">
              <div className="overflow-hidden flex items-center justify-center text-indigo-800">
                <u className="overflow-hidden">Our Mission</u>
              </div>
              <div className="inner-font pt-6 text-justify px-5 text-[1rem] font-medium max-h-full overflow-auto">
                <ol className="space-y-6">
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">In today's software-driven era, finding information is easy, but there's still a gap when it comes to accessing details about people vital to our daily lives.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">Yes, we're referring to the human resources that handle our daily tasks, such as maids, sanitation workers, drivers, guards, and rickshaw pullers.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">SAMIP is our initiative to bridge this gap, with security at its core.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">SAMIP’s mission is to build verified worker portfolios, conduct police checks, and help upgrade their skills, especially in communication.</span>
                  </li>
                  <li className="flex items-center">
                    <MdArrowCircleRight className="text-purple-500" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                    <span className="ml-3">Provide jobs as per expertise and to create a secure, and hassle-free environment in the city.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="box1 relative">
              <img src="images/mission.jpg" alt="" className="absolute top-0 left-0 object-cover object-center w-full h-full goals-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;