
function AboutUs() {
  return (
    <>

      <div className="aboutus w-screen h-auto flex flex-col gap-5 px-[4rem]  mt-6 " >
        <h1 className=" text-[#FF0000]  text-[2.1rem] text-5xl  uppercase font-[500] overflow-hidden">About SAMIP</h1>
        <p className="aboutdetail font-semibold text-[15px] text-justify ">SAMIP is a comprehensive software platform designed to streamline society management through a unified interface. It empowers RWAs (Resident Welfare Associations) with a dedicated console to manage all activities efficiently. SAMIP also offers user-friendly smartphone apps for residents and workers, enabling them to monitor and access services from anywhere. With a mission to deliver seamless, secure, and integrated solutions, SAMIP ensures hassle-free communication and operations for everyone involved. Whether it's managing tasks, addressing issues, or accessing essential services, SAMIP simplifies the entire process for residents, admins, and workers alike.</p>
      </div>
        <button className="SeeMore font-semibold flex justify-start ml-16 text-[#5a50e5]">See More....</button>

    </>
  )

}

export default AboutUs;