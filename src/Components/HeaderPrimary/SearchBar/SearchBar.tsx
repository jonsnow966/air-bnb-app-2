import './SearchBar.css'
import { useState } from 'react';

function SearchBar() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  return (
    <>
      <div className="bg-slate-50 w-5/12 h-16 rounded-full 
      flex fle flex-row shadow-lg cursor-pointer items-center
      ">

        <a id="search_bar" className="w-64 h-full rounded-full bg-slate-50
        flex flex-col pl-8 justify-center hover:bg-slate-200">
          <p className="text-black text-sm">Where</p>
          <input placeholder="Search Destintions" 
          className="bg-inherit placeholder-gray-400 font-normal
          rounded-full rounded-l-none w-11/12 text-black 
          pr-2 outline-none"/>
        </a>
        <div id="first" className="w-px h-8 bg-slate-300"
        style={{ opacity: isHovering ? 0 : 1 }}></div>
        
        <a id="check_in_btn" className="w-36 h-full rounded-full bg-slate-50 
        flex flex-col pl-8 justify-center hover:bg-slate-200"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        >
          <p className="text-black text-sm">Check-in</p>
          <p className="text-gray-400 text-base font-normal">Add Dates</p>
        </a>
        <div id='second' className="w-px h-8 bg-slate-300 "
        style={{ opacity: isHovering2 ? 0 : 1 }}></div>

        <a id="check_out_btn" className="w-36 h-full rounded-full  bg-slate-50
        flex flex-col pl-8 justify-center hover:bg-slate-200"
        onMouseEnter={() => setIsHovering2(true)}
        onMouseLeave={() => setIsHovering2(false)}
        >
          <p className="text-black text-sm">Check-out</p>
          <p className="text-gray-400 text-base font-normal">Add Dates</p>
        </a>
        <div id="third" className="w-px h-8 bg-slate-300 "
        style={{ opacity: isHovering3 ? 0 : 1 }}></div>

        <a id="add_guests_btn" className="w-64 h-full rounded-full  bg-slate-50
        flex flex-col pl-8 justify-center hover:bg-slate-200"
        onMouseEnter={() => setIsHovering3(true)}
        onMouseLeave={() => setIsHovering3(false)}
        >
          <p className="text-black text-sm">Who</p>
          <p className="text-gray-400 text-base font-normal">Add Guests</p>
        </a>

        <a className="bg-red-500 w-12 h-12 rounded-full
        flex items-center justify-center z-10 absolute hover:bg-red-600" 
        style={{right: '29.5%'}}>     
            <img rel="icon" src="/src/assets/search-icon.png"
            className="w-5"></img>
        </a>
        
      </div>
    </>
  )
}

export default SearchBar