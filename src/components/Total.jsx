import CountUp from 'react-countup';

const Total = () => {
  return (
    <>
      <div
        className='w-screen h-[300px] relative bg-cover bg-center'
        style={{
          backgroundImage: "url('/images/back.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="w-screen h-[300px]">
          <div className="flex justify-around items-center h-[300px] text-white relative z-10">
            <div className="flex flex-col justify-around items-center gap-10">
              <h2 className="text-5xl font-bold overflow-hidden">
                <CountUp start={0} end={3300} duration={3} />+
              </h2>

              <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14' />

              <p className="text-xl">Workers</p>
            </div>

            <div className="flex flex-col justify-around items-center gap-12">
              <h2 className="text-5xl font-bold overflow-hidden">
                <CountUp start={0} end={112} duration={3} />+
              </h2>
              <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14' />
              <p className="text-xl">Societies</p>
            </div>

            {/* Services Offered */}
            <div className="flex flex-col justify-around items-center gap-12">
              <h2 className="text-5xl font-bold overflow-hidden">
                <CountUp start={0} end={16} duration={3} />+
              </h2>
              <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14' />
              <p className="text-xl">Services Offered</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Total;

