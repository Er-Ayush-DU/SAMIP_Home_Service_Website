import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";

const LUP = () => {
  return (
    <>
      <div className="h-auto w-full bg-[#ffffff] px-10 flex flex-col gap-5 relative my-10">

        {/* Watermark Background Image */}
        <div
          className="absolute inset-0 bg-[url('images/manacle.png')] bg-cover bg-center opacity-15 z-0"
          style={{ backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        ></div>

        <h1 className="flex justify-start font-bold text-3xl text-indigo-800 z-10">
          <u className="overflow-hidden">MANACLE TECHNOLOGIES Pvt.Ltd</u>
        </h1>

        <h2 className="text-justify font-medium z-10">
          SAMIP is an integrated platform by LUP for managing community services, offering features like attendance, vehicle, garbage, and vendor management. It also includes a complaint system and emergency SOS alerts. Residents can monitor these services through a smartphone app for transparency and convenience. SAMIP is a comprehensive software platform designed to streamline society management through a unified interface. It empowers RWAs (Resident Welfare Associations) with a dedicated console to manage all activities efficiently. SAMIP also offers user-friendly smartphone apps for residents and workers, enabling them to monitor and access services from anywhere. With a mission to deliver seamless, secure, and integrated solutions, SAMIP ensures hassle-free communication and operations for everyone involved. Whether it's managing tasks, addressing issues, or accessing essential services, SAMIP simplifies the entire process for residents, admins, and workers alike.
        </h2>

        <h3 className="z-10 font-medium">
          Below are some key points regarding SAMIP:
        </h3>

        <div className="z-10">
          <ol className="space-y-6 font-medium">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>SAMIP is an all-in-one software platform that seamlessly handles various services and issues through multiple
                applications, making everything easy and simple.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>RWA (Society Management) will be provided console for all activities.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>SAMIP provides Smartphone apps for residents and workers, through which they can monitor and use services
                from anywhere.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>SAMIP mission is to provide seamless and secured Integrated services to residents, RWA admins and workers.</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default LUP;