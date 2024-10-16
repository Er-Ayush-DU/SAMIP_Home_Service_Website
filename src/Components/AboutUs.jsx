
const data = [
  {
    bg: "white",
    content: (
      <>
        <div className="w-[388px] h-[11.94px] bg-gray-500 rounded-sm"></div>
        <img src="Hero_Images/samip-logo2.png" alt="" className="h-36" />
        <h1 className="font-bold text-xl text-[#2F2BF6] h-16 text-center px-1 samip-full-form">
          SOCIETY ALL-IN-ONE MANAGEMENT INTEGRATED PLATFORM
        </h1>
        <p className="text-justify px-12 overflow-hidden font-semibold about-paragraph">
          SAMIP is a comprehensive software platform designed to streamline society
          management through a unified interface.
        </p>
        <a href="/about" className="about-button">
          <button className="h-8 w-28 bg-[#2F2BF6] flex justify-center items-center rounded-md about_button">
            Read More
          </button>
        </a>
        <div className="w-[388px] h-[11.94px] bg-gray-500 rounded-sm"></div>
      </>
    ),
  },
  {
    bg: "white",
    content: (
      <>
        <div className="w-[388px] h-[11.94px] bg-gray-500 rounded-sm"></div>
        <img src="images/lup.png" alt="" className="h-36" />
        <h1 className="font-bold text-xl text-[#2F2BF6] h-16 text-center px-1">
          LOK UTTHAN PEHAL FOUNDATION(LUP)
        </h1>
        <p className="text-justify px-12 overflow-hidden font-semibold about-paragraph">
          LUP is a registered NGO.We are determined to stand up
          for the weak and become their
          weapons as per their needs.


        </p>
        <a href="/lup" className="about-button">
          <button className="h-8 w-28 bg-[#2F2BF6] flex justify-center items-center rounded-md about_button">
            Read More
          </button>
        </a>
        <div className="w-[388px] h-[11.94px] bg-gray-500 rounded-sm"></div>
      </>
    ),
  },
  {
    bg: "white",
    content: (
      <>
        <div className="w-[388px] h-[11.94px] bg-gray-500 rounded-sm"></div>
        <img src="images/manacle.png" alt="" className="h-36" />
        <h1 className="font-bold text-xl text-[#2F2BF6] h-16 text-center px-1">
          MANACLE TECHNOLOGIES
        </h1>
        <p className="text-justify px-12 overflow-hidden font-semibold about-paragraph">
          Manacle Technologies Pvt. Ltd is a software service
          provider company, established in 2012, CMMI Level 3 certified.
        </p>
        <a href="/manacle" className="about-button">
          <button className="h-8 w-28 bg-[#2F2BF6] flex justify-center items-center rounded-md about_button">
            Read More
          </button>
        </a>
        <div className="w-[388px] h-[11.94px] bg-gray-500 rounded-sm"></div>
      </>
    ),
  },
];

function AboutUs() {
  return (
    <div className="w-screen h-auto bg-[#f2f2f2] mt-10 pb-10 ">
      <h1 className="text-center mt-5 text-4xl font-semibold text-orange-500 overflow-hidden">
        WHO ARE WE
      </h1>
      <p className="font-medium mt-5 px-12 text-justify">
        SAMIP is a comprehensive software platform designed to streamline society
        management through a unified interface. It empowers RWAs (Resident Welfare
        Associations) with a dedicated console to manage all activities efficiently.
        SAMIP also offers user-friendly smartphone apps for residents and workers,
        enabling them to monitor and access services from anywhere. With a mission to
        deliver seamless, secure, and integrated solutions, SAMIP ensures hassle-free
        communication and operations for everyone involved. Whether it's managing
        tasks, addressing issues, or accessing essential services, SAMIP simplifies
        the entire process for residents, admins, and workers alike.
      </p>

      <div className="flex flex-wrap mt-10 justify-around container-box">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-[440px] h-[471px] bg-${item.bg} flex flex-col justify-center items-center gap-[27px]`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;