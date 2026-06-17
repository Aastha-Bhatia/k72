import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText=()=>{
  return(
    <div className='font-[font2] flex items-center justify-center gap-5 pb-2'>
      <Link className='text-[6vw] leading-[4.5vw] uppercase border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 pt-5' to="/projects">Projects</Link>
      <Link className='text-[6vw] leading-[4.5vw] uppercase border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full px-8 pt-5' to="/agence">Agence</Link>
    </div>
  )
}
export default HomeBottomText
