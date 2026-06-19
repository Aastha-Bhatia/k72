import React from 'react'
const Projects=()=>{
  return(
    <div className='p-2'>
      <div className='bg-red-200 pt-[45vh]'>
        <h2 className='font-[font2] text-[11.5vw] uppercase'>Projects</h2>
      </div>

      {/* main animation, scrolling effect */}
      <div className='-mt-13'>
        <div className='w-full h-[550px] mb-2 flex gap-3'>
          <div className='w-1/2 group relative transition-all hover:rounded-[40px] overflow-hidden h-full bg-green-900'>
          <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1200&h=1920&s=505ea3cc92524cc5c493dfa12440beeb" alt="" />
          {/* text inside the box */}
          <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 flex left-0 h-full w-full bg-black/10 items-center justify-center'>
            <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full px-4 pt-2 text-white '>Vior Le Projet</h2>
          </div>
          </div>
          {/* 2nd */}
          <div className='w-1/2 group relative transition-all hover:rounded-[40px] overflow-hidden h-full bg-green-900'>
          <img className='h-full w-full object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920.jpg?w=1200&h=1920&s=b18d369df1e2ac454455ceb3ebb67edc" alt="" />
          {/* text inside the box */}
          <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 flex left-0 h-full w-full bg-black/10 items-center justify-center'>
            <h2 className='uppercase text-6xl font-[font2] border-2 rounded-full px-4 pt-2 text-white '>Vior Le Projet</h2>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
