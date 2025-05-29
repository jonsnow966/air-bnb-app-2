function FooterEnd() {
  return (
    <>
      <div className="flex flex-row px-0 w-full h-20
      border-gray-300 border-t-[1px] text-black
      -center">
        <div className='flex flex-row items-center gap-1 '>
          
          <span className='mr-0.5 mb-0.5 cursor-text 
          truncate'>&copy;&nbsp;2025 Airbnb,Inc.</span>

          <span className='mx-1 mb-[8px]'>.</span>

          <a className='text-black font-normal cursor-pointer 
          hover:text-black hover:underline hover:underline-offset-1'>
            Terms</a>

          <span className='mx-1 mb-[8px]'>.</span>

          <a className='text-black font-normal cursor-pointer 
          hover:text-black hover:underline hover:underline-offset-1'>
            Sitemap</a>

          <span className='mx-1 mb-[8px]'>.</span>

          <a className='text-black font-normal cursor-pointer 
          hover:text-black hover:underline hover:underline-offset-1'>
            Privacy</a>

          <span className='mx-1 mb-[8px]'>.</span>

          <a className='text-gray-500 font-normal cursor-pointer 
          hover:text-gray-500 hover:underline hover:underline-offset-1
          truncate flex flex-row gap-2 items-center'>
            Your Privacy Choices
            <img rel="icon" src="/public/icon-footer.png"
            className="w-6 h-3"></img>
            </a>
        </div>

        <div className="flex flex-row items-center gap-1
        absolute right-10 h-20 w-80 mr-[-20px]">
            <a className="flex flex-row h-8 w-32 items-center gap-1
            rounded-lg hover:bg-[#e2e2e2]
            px-2 text-[16px] cursor-pointer">
              <img rel="icon" src="/public/globe.avif"
              className="w-4 h-4"></img>
              English (US)
            </a>

            <a className="flex flex-row h-8 w-16 items-center gap-1
            rounded-lg hover:bg-[#e2e2e2]
            px-2 text-[16px] cursor-pointer">
              $ USD
            </a>

            <a className="flex flex-row h-8 w-8 items-center gap-1
            rounded-full hover:bg-[#e2e2e2]
            px-2 text-[16px] cursor-pointer">
              <img rel="icon" src="/public/facebook-icon.png"
              className="w-4 h-4"></img>
            </a>

            <a className="flex flex-row h-8 w-8 items-center gap-1
            rounded-full hover:bg-[#e2e2e2]
            px-2 text-[16px] cursor-pointer">
              <img rel="icon" src="/public/X_icon.png"
              className="w-4 h-4"></img>
            </a>

            <a className="flex flex-row h-8 w-8 items-center gap-1
            rounded-full hover:bg-[#e2e2e2]
            px-2 text-[16px] cursor-pointer">
              <img rel="icon" src="/public/instagram_icon.png"
              className="w-4 h-4"></img>
            </a>
        </div>
      </div>
    </>
  )
}

export default FooterEnd