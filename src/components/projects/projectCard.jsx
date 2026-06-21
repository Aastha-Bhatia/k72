import React from 'react'
const projectCard=(props)=>{
  return(
        <>
          <div className='w-full lg:w-1/2 group relative transition-all hover:rounded-[40px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image1} alt="" />
            {/* text inside the box */}
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 flex left-0 h-full w-full bg-black/10 items-center justify-center'>
                <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full px-4 pt-2 text-white '>Vior Le Projet</h2>
            </div>
            </div>
            {/* 2nd */}
            <div className='w-full lg:w-1/2 group relative transition-all hover:rounded-[40px] overflow-hidden h-full'>
            <img className='h-full w-full object-cover' src={props.image2} alt="" />
            {/* text inside the box */}
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 flex left-0 h-full w-full bg-black/10 items-center justify-center'>
                <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full px-4 pt-2 text-white '>Vior Le Projet</h2>
            </div>
          </div>
        </>
  )
}

export default projectCard
