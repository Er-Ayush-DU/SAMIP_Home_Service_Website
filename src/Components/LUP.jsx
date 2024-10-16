import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";

const LUP = () => {
  return (
    <>
      <div className="h-auto w-full bg-[#ffffff] px-10 flex flex-col gap-5 relative my-10">

        {/* Watermark Background Image */}
        <div
          className="absolute inset-0 bg-[url('images/lup.png')] bg-cover bg-center opacity-15 z-0"
          style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        ></div>

        <h1 className="flex justify-start font-bold text-3xl text-indigo-800 z-10">
          <u className="overflow-hidden">LUP (LOK UTTHAN PEHAL FOUNDATION)</u>
        </h1>

        <h2 className="text-justify font-medium z-10">
          LokUtthan Pehal Foundation, a registered NGO founded in 2023, is dedicated to empowering the underprivileged by providing them with the support and resources they need to improve their lives. It is led by Shri Kamlesh Raghuvanshi, a seasoned professional with vast experience in both the IT and social sectors.
        </h2>

        <h3 className="z-10 font-medium">
          Below are some key points regarding LUP:
        </h3>

        <div className="z-10">
          <ol className="space-y-6 font-medium">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>Established in 2023 as a CSR initiative of Manacle Technologies Pvt. Ltd.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>Focuses on bridging the gap between the needy and essential resources.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>Manacle Technologies is a CMMI Level 3 certified software service provider.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>The foundation is guided by Shri Kamlesh Raghuvanshi, a professor and social worker with over 20 years of IT industry experience.</span>
            </li>
          </ol>
        </div>
        <div className="">
          For More Information visit <a href="https://lokutthanfoundation.in/">https://lokutthanfoundation.in/</a>
        </div>
      </div>
    </>
  )
}

export default LUP;