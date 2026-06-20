import React from 'react'
import ProjectCard from '../components/projects/projectCard'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Projects=()=>{
  const projects=[
    {
      image1: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1200&h=1920&s=505ea3cc92524cc5c493dfa12440beeb',
      image2: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1200x1920.jpg?w=1200&h=1920&s=b18d369df1e2ac454455ceb3ebb67edc'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---FeaturedImage.jpg?w=1200&h=1920&s=c644f6373f81f0da579c3b214d08f1f4',
      image2: 'https://k72.ca/images/caseStudies/OKA/OKA_Fromage_08_2692_srgb.jpg?w=1200&h=1920&s=4bf2c3ead1ed1552f0f3bfb12ada4544',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/OPTO_featuredimage.jpg?w=1200&h=1920&s=c86341652b80401c3475b081a3e44024',
      image2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_planches_horizontales_gammecomplete1024.jpg?w=1200&h=1920&s=5b47e5169be24eee33dc88a3211de348'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/BEST/featuredimage_best.jpg?w=1200&h=1920&s=a15c70c1268cdba55c90cbeab144895a',
      image2: 'https://k72.ca/images/caseStudies/A_table/MOD_K72_20211104_CS_Divan_419.jpg?w=1200&h=1920&s=8d3bb96e89c577863b2859e004e27701',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-featured_img.jpg?w=1200&h=1920&s=902d926316975082f94a90e8cc3804eb',
      image2: 'https://k72.ca/images/caseStudies/OSM/featuredimage_OSM.jpg?w=1200&h=1920&s=f9120e751956507de9dce97344921375'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Featured.jpg?w=1200&h=1920&s=400ab7103ae67c1343d1dd7ce9aae0dd',
      image2: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_featured.jpg?w=1200&h=1920&s=a9588f628f186896dd66ed2096ba28d5'
    },
    {
      image1: 'https://k72.ca/images/caseStudies/Opto/featuredimage_opto.jpg?w=1200&h=1920&s=034384f814f82a7d70e95cc4ab3c565c',
      image2: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Featured.jpg?w=1200&h=1920&s=b6128a058cfa913791364f5d8814e9a8',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_featured_bebitte.jpg?w=1200&h=1920&s=6adeca5d0052fda1e714601c5f7c6ed7',
      image2: 'https://k72.ca/images/caseStudies/SHELTON/K72_20210207_Shelton_Photo1_52_HR.jpg?w=1920&s=f8f56e399a978b807e8e3ffa36d1e428'
    }
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.from('.hero',{
      height: '100px',
      stagger:{
        amount: 0.1,
      },
      scrollTrigger:{
        trigger:'.lol',
        // markers: true,
        start: 'top 100%',
        end: 'top -150%',
        scrub: true,
      }
    })
  })

  return(
    <div className='lg:p-2 p-1'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font2] lg:text-[11.5vw] text-7xl uppercase'>Projects</h2>
      </div>

      {/* main animation, scrolling effect */}
      <div className='-lg:mt-13 lol'>
        {projects.map(function(elem, idx){
          return (
          <div key={idx} className='hero w-full lg:h-[500px] mb-2 flex lg:flex-row flex-col lg:gap-3 gap-1.5'> 
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
          )
        })}
      </div>

    </div>
  )
}

export default Projects
