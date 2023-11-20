import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { hero_bg, hero_bg2, hero_bg3 } from '../assets'
import styles from '../style'
import { Subheading } from "../components"


const Hero = () => {
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <section id='/' className="embla " ref={emblaRef}>
      
      <div className="embla__container container relative max-w-full h-[524px]"> 
      {/* embla carousel */}
        <div className="embla__slide ">
          <img src={hero_bg} alt="bulalohan" className='absolute bg-auto w-full h-full '/>
          <div className='absolute bg-[rgba(0,0,0,0.4)] h-full w-full'/>
        </div>
        <div className="embla__slide ">
          <img src={hero_bg2} alt="bulalohan" className='absolute bg-auto w-full h-full object-cover mix-blend-overlay'/>
          <div className='absolute bg-[rgba(0,0,0,0.4)] h-full w-full'/>
        </div>
        <div className="embla__slide ">
          <img src={hero_bg3} alt="bulalohan" className='absolute bg-auto w-full h-full object-cover mix-blend-overlay'/>
          <div className='absolute bg-[rgba(0,0,0,0.4)] h-full w-full'/>
        </div>
        {/*!!embla carousel */}
      </div>
      


      <div className={`flex flex-col container gap-y-4 absolute md:top-40 md:right-20 top-60 max-w-2xl ${styles.paddingX} ${styles.paddingY} slide-in-blurred-left `}>
        
        <div>
          <Subheading title='Bulalohan sa Riyadh'/>
          <h1 className='text-white uppercase xs:tracking-[14px] tracking-[12px] font-normal md:text-[40px] text-[17px]'>Your Table,<br />Your Adventure<br/><span className='text-secondary'>Join Us Today!</span></h1>
        </div>
        
        <button className='text-white hover:text-secondary border-2 hover:border-secondary px-4 py-[8px] max-w-fit rounded-md group transition duration-300 leading-none'>Book a table <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] mt-[4px] bg-secondary "/></button>
      </div>
      
    </section>
  )
}

export default Hero
