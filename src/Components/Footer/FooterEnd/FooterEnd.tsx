function FooterEnd() {
  return (
    <div className="flex px-0 w-full h-20 border-gray-300 border-t-[1px] text-black">
      <div className='flex items-center gap-1 '>
        <span className='mr-0.5 mb-0.5 cursor-text truncate'>&copy;&nbsp;2025 Airbnb,Inc.</span>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-black font-normal cursor-pointer hover:text-black hover:underline hover:underline-offset-1'>
          Terms 
        </div>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-black font-normal cursor-pointer hover:text-black hover:underline hover:underline-offset-1'>
          Sitemap 
        </div>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-black font-normal cursor-pointer hover:text-black hover:underline hover:underline-offset-1'>
          Privacy 
        </div>

        <span className='mx-1 mb-[8px]'>.</span>

        <div className='text-gray-500 font-normal cursor-pointer hover:text-gray-500 hover:underline hover:underline-offset-1 truncate flex gap-2 items-center'>
          Your Privacy Choices
          <img rel="icon" src="assets/icon-footer.png" className="w-6 h-3"></img>
        </div>
      </div>

      <div className="flex items-center gap-1 absolute right-10 h-20 w-80 mr-[-20px]">
        <div className="flex h-8 w-32 items-center gap-1 rounded-lg hover:bg-[#e2e2e2] px-2 text-[16px] cursor-pointer">
          <img rel="icon" src="assets/globe.avif" className="w-4 h-4"></img>
          English (US)
        </div>

        <div className="flex h-8 w-16 items-center gap-1 rounded-lg hover:bg-[#e2e2e2] px-2 text-[16px] cursor-pointer">
          $ USD
        </div>

        <div className="flex h-8 w-8 items-center gap-1 rounded-full hover:bg-[#e2e2e2] px-2 text-[16px] cursor-pointer">
          <img rel="icon" src="assets/facebook-icon.png" className="w-4 h-4"></img>
        </div>

        <div className="flex h-8 w-8 items-center gap-1 rounded-full hover:bg-[#e2e2e2] px-2 text-[16px] cursor-pointer">
          <img rel="icon" src="assets/X_icon.png" className="w-4 h-4"></img>
        </div>

        <div className="flex h-8 w-8 items-center gap-1 rounded-full hover:bg-[#e2e2e2] px-2 text-[16px] cursor-pointer">
            <img rel="icon" src="assets/instagram_icon.png" className="w-4 h-4"></img>
        </div>
      </div>
    </div>
  )
}

export default FooterEnd