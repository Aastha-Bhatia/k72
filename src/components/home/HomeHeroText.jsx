import React from 'react'

const HomeHeroText=()=>{
  return(
    <div className='font-[font1] pt-5 lg:mt-0 md:mt-0 mt-55 text-center'>
      <div className='lg:text-[9vw] md:text-[8vw] text-[12vw] uppercase lg:leading-[9vw] md:leading-[9vw] leading-[11vw] justify-center flex items-center'>L'étincelle</div>
      <div className='lg:text-[9vw] md:text-[8vw] text-[12vw] uppercase lg:leading-[9vw] md:leading-[9vw] leading-[11vw] justify-center flex items-center'>qui
        <div className='w-[16vw] h-[7vw] -mt-5 rounded-full overflow-hidden'>
        <video 
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          />
        </div>
        génère
        </div>
      <div className='lg:text-[10vw] md:text-[8vw] text-[12vw] uppercase lg:leading-[9.5vw] leading-[11vw] justify-center flex items-center'>la créativité</div>

    </div>
  )
}

export default HomeHeroText
