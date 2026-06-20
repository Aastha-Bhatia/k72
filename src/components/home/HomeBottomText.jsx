import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText=()=>{
  return(
    <div className='font-[font2] flex items-center justify-center gap-5 pb-2'>
      <p className='absolute lg:w-80 md:w-90 w-60 right-5 lg:bottom-32 md:bottom-32 sm:bottom-17 bottom-30 font-[font2] lg:text-[1vw] md:text-[1.5vw]  text-1vw sm:text-[2vw] lg:leading-5 leading-4'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <Link className='text-[6vw] leading-[4.5vw] uppercase border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full lg:px-8 px-2 lg:pt-4 pt-1.5 lg:pb-3 pb-1' to="/projects">Projects</Link>
      <Link className='text-[6vw] leading-[4.5vw] uppercase border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full lg:px-8 px-2 lg:pt-4 pt-1.5 lg:pb-3 pb-1' to="/agence">Agence</Link>
    </div>
  )
}
export default HomeBottomText
