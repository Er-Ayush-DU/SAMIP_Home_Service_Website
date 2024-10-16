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
          Manacle Technologies Pvt. Ltd. is a Delhi based software development company providing customized software solutions to the organizations. Its proven credentials and commitment to quality services give Manacle an edge over the others in meeting IT and Software demands of the clients.

          We, at Manacle Technologies value customer satisfaction and our dedicated team of Software developer always strives to maintain it.

          Our software solutions are widely used in the manufacturing, FMCG, Pharma, Dairy and Healthcare Industries supporting them in automation of their process. Over the time we have developed expertise in digitalizing the sales and sales force monitoring processes through our application mSELL. Manacle Technologies takes pride in serving New Delhi Municipal Corporation through its application mCIVIC. mCIVIC fully automates citizen relationship management processes of municipalities. mEDU solution digitalizes entire processes of educational institutions (schools & Colleges).

          Manacle believes in bringing in productive change in the client companies constantly by providing software tools that help companies in making best use of their resources.

          Manacle ensures that the tools and software developed are user friendly, easy to operate on multiple devices and cost effective.mSELL is a Complete Growth-Oriented Business Solution that enables the field sales team to perform most of their work on the go. With seamless teamwork, optimized operations, automated workflow, and real-time analytics, you can empower your success.mSELL is here to simplify your processes and amplify your results. This innovative sales force automation software ensures increased efficiency by providing accurate analytics for market data for your business growth. Embrace the future of productivity!
        </h2>

        <h3 className="z-10 font-medium">
          Below are some key points regarding Manacle Technologies:
        </h3>

        <div className="z-10">
          <ol className="space-y-6 font-medium">
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>Boosts Sales Team Productivity: mSELL helps field sales teams work efficiently on the go with automated workflows and real-time analytics.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>Streamlines Operations: It ensures seamless collaboration among team members, enabling smooth business operations.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>Provides Actionable Insights: mSELL delivers accurate market data and insights to help businesses make informed, growth-driven decisions.</span>
            </li>
            <li className="flex items-center gap-4">
              <FontAwesomeIcon icon={faArrowsToDot} className="" />
              <span>Optimizes Sales Performance: By improving overall efficiency and simplifying processes, mSELL keeps businesses competitive and successful.
              </span>
            </li>
          </ol>
        </div>

        <div className="">
          For More Information visit <a href="https://manacleindia.com/">https://manacleindia.com/</a>
        </div>
      </div>
    </>
  )
}

export default LUP;