import React, { useState } from 'react';

function Feature() {
  const content = [
    {
      title: 'Attendance Management',
      img: 'images/attendance.png',
    },
    {
      title: 'Visitor Management',
      img: 'images/visitor.png',
    },
    {
      title: 'Vendor Management',
      img: 'images/vendor.png',
    },
    {
      title: 'Scrap Management',
      img: 'images/scrap.png',
    },
    {
      title: 'Vehicle Management',
      img: 'images/vehicle.png',
    },
    {
      title: 'Account Management',
      img: 'images/account.png',
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <div className='Feature mb-[30px]'>
        <div className="samipTitle flex flex-col justify-center items-center mt-[40px] mb-[20px] ">
          <h1 className="text-[22px] text-lg uppercase font-bold text-[#FF0000]">Samip-feature</h1>
          <div>
            <h1 className="font-extrabold text-[26px] text-[#7F24C6] bulding_safety ">Building Stronger Communities <span className='hiden'>Through</span></h1>
            <h1 className="font-extrabold text-[26px] text-center text-[#7F24C6] bulding_safety"><span className='show'>Through</span>Safety and Service </h1>
          </div>
        </div>

        <div className='flex flex-wrap justify-center '>
          {content.map((item, index) => (
            <div className='details overflow-hidden cursor-pointer feature_item'
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                border: '1px solid black',
                borderRadius: '15px',
                // padding: '10px',
                marginBottom: '10px',
                fontFamily: '"Poppins", Inter, Arial, sans-serif',
                height: '157px',
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '15px',
                textAlign: 'center',
                backgroundColor: hoverIndex === index 
                  ? '#6A9CE8' 
                  : (hoverIndex === null && index === 1) 
                    ? '#6A9CE8' 
                    : 'transparent', // Default blue only if not hovering any other box
                transition: 'background-color 0.3s', // Smooth transition

              }}
            >
              <h1 className='font-[650px] text-[25px] h-20 title_feature'>{item.title}</h1>
              <img src={item.img} alt="" className='object-cover h-[150px] title img'/>
            </div>
          ))}
        </div>

        <button
          className="feature-btn border-black rounded-[15px] w-[120px] h-[35px] ml-[150px] mt-[10px] bg-[#2F2BF6] text-[white] border-0 button_view_more"
          style={{
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'white',
              e.currentTarget.style.color = 'blue';
            e.currentTarget.style.border = '1px solid blue';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2F2BF6';
            e.currentTarget.style.color = 'white';
          }}
        >
          View More
        </button>
      </div>
    </>
  );
}

export default Feature;
