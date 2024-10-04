import CountUp from 'react-countup';

const Total = () => {
  return (
    <>
      <div
        className=' total_bg w-screen h-[300px] relative bg-cover bg-center'
        style={{
          backgroundImage: "url('/images/soc.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className=" total_for w-screen h-[300px] overflow-hidden">
          <div className="flex justify-around items-center h-[300px] text-white relative z-10">
            <div className="flex flex-col justify-around items-center gap-10">
              <h2 className="text-5xl stat_total font-bold overflow-hidden">
                <CountUp start={0} end={3300} duration={3} />+
              </h2>

              <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14 belan_icon' />

              <p className="text-xl stat_total_name">Workers</p>
            </div>

            <div className="flex flex-col justify-around items-center gap-12">
              <h2 className="text-5xl stat_total font-bold overflow-hidden">
                <CountUp start={0} end={112} duration={3} />+
              </h2>
              <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14 belan_icon' />
              <p className="text-xl stat_total_name">Societies</p>
            </div>

            {/* Services Offered */}
            <div className="flex flex-col justify-around items-center gap-12">
              <h2 className="text-5xl stat_total font-bold overflow-hidden">
                <CountUp start={0} end={16} duration={3} />+
              </h2>
              <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14 belan_icon' />
              <p className="text-xl stat_total_name">Services <span className='offered'>Offered</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;

