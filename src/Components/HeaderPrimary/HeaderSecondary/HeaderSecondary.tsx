function HeaderSecondary() {
  return (
    <>
     <div className="w-full h-28 
      flex flex-row 
      items-center justify-between">
        
        <a href="http://localhost:5173/" className= "w-32 h-16 ml-8 cursor-pointer">
          <img rel="logo" src="/public/airbnb-ar21.svg" className="w-full h-full"/>
        </a>
        
        <div className="w-2/4 h-full ml-14
        flex flex-row justify-center items-center gap-2">
          
          <a className="bg-inherit  text-gray-500
          h-16 w-28 rounded-none flex flex-row items-center justify-center
          cursor-pointer gap-2 hover:text-black hover:border-b-2 hover:border-black">
              <img rel="icon" src="/public/homes-ico.avif" 
              className="w-10 hover:w-12 transition-all"></img>
              Homes
          </a>

          <a className="bg-inherit text-gray-500
          h-16 w-32  rounded-none flex flex-row items-center justify-center
          cursor-pointer gap-2 hover:text-black hover:border-b-2 hover:border-black">
              <img rel="icon" src="/public/experiences-ico.avif" 
              className="w-6 hover:w-8 transition-all"></img>
              Experiences
          </a>
          
          <a className="bg-inherit text-gray-500
          h-16 w-28  rounded-none flex flex-row items-center justify-center
          cursor-pointer gap-2 hover:text-black hover:border-b-2 hover:border-black">
              <img rel="icon" src="/public/services-ico.avif"
              className="w-8 hover:w-10 transition-all"></img>
              Services
          </a>
        </div>
        
        <div className="w-60 h-20 mr-8 flex flex-row justify-center items-center gap-2">
          <button className="bg-inherit w-32 h-10 text-sm text-wrap text-black rounded-3xl 
          border-none outline-none hover:bg-[#c7c7c7] transition-colors">
            Become a host
          </button>

          <a className="bg-[#e7e7e7] w-10 h-10 text-sm text-wrap text-black rounded-3xl
          flex items-center justify-center border-none outline-none 
          hover:bg-[#c7c7c7] transition-colors cursor-pointer">
            <img rel="icon" src="/public/globe.avif" className="w-4"></img>
          </a>

          <a className="bg-[#e7e7e7] w-10 h-10 text-sm text-wrap text-black rounded-3xl 
          flex items-center justify-center border-none outline-none
          hover:bg-[#c7c7c7] transition-colors cursor-pointer">
            <img rel="icon" src="/public/hamburger.png" className="w-4"></img>
          </a>
        </div>

     </div>
    </>
  )
}

export default HeaderSecondary