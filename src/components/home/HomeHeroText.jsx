import React from 'react'
import Video from './Video'

const HomeHeroText=()=>{
  return(
    <div className='font-[font1] pt-5 text-center'>
      <div className='text-[9vw] uppercase leading-[9vw] justify-center flex items-center'>L'étincelle</div>
      <div className='text-[9vw] uppercase leading-[9vw] justify-center flex items-center'>qui
        <div className='w-[16vw] h-[7vw] -mt-5 rounded-full overflow-hidden'><Video/>
        </div>
        génère
        </div>
      <div className='text-[10vw] uppercase leading-[9.5vw] justify-center flex items-center'>la créativité</div>

    </div>
  )
}

export default HomeHeroText
