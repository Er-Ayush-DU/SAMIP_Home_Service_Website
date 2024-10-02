import React, { useState } from 'react';

function Feature() {
  const content = [
    {
      title: 'Attendance Management',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.',
    },
    {
      title: 'Visitor Management',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.',
    },
    {
      title: 'Vendor Management',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.',
    },
    {
      title: 'Scrap Management',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.',
    },
    {
      title: 'Vehicle Management',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.',
    },
    {
      title: 'Account Management',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magni corporis cumque veritatis.',
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      <div className='Feature mb-[30px]'>
        <div className="samipTitle flex flex-col justify-center items-center mt-[40px] mb-[20px] ">
          <h1 className="text-[22px] text-lg uppercase font-bold text-[#FF0000]">Samip-feature</h1>
          <div>
            <h1 className="font-extrabold text-[26px] text-[#7F24C6]">Building Stronger Communities Through</h1>
            <h1 className="font-extrabold text-[26px] text-center text-[#7F24C6]">Safety and Service</h1>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {content.map((item, index) => (
            <div className='details '
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{
                border: '1px solid black',
                borderRadius: '15px',
                padding: '10px',
                marginBottom: '10px',
                fontFamily: '"Poppins", Inter, Arial, sans-serif',
                height: '157px',
                width: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '15px',
                textAlign: 'center',
                backgroundColor: hoverIndex === index || index === 1 ? '#6A9CE8' : 'transparent', // Hover effect and default blue for 2nd box
                transition: 'background-color 0.3s', // Smooth transition

              }


              }
            >
              <h1 style={{ fontWeight: '650', marginBottom: '10px', fontSize: '20px' }}>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <button
          className="feature-btn border border-black rounded-[15px] w-[120px] h-[35px] ml-[150px] mt-[10px] bg-[#2F2BF6] text-[white] border-0"
          style={{
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'white',
              e.currentTarget.style.color = 'blue';
            e.currentTarget.style.border = '1px solid blue';

          }}


          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2F2BF6'
            e.currentTarget.style.color = 'white';

          }}
        >
          See More...
        </button>
      </div>
    </>
  );
}

export default Feature;
