import React from 'react'
import styles from '../style'
import { spoon1 } from '../assets'
import { about1 } from '../assets'

const About = () => {
  return (
    <section id='about' className={`relative container  max-w-full h-[642px] flex sm:flex-row flex-col-reverse justify-center items-center'`}>
        
        <div className={`relative container max-w-full h-full flex justify-center`}>
            <div className='absolute container max-w-full h-full bg-[rgba(0,0,0,0.4)] '/>
            <img src={ about1 } alt="bulalo"  className='w-full h-auto object-fit'/>
        </div>
        
        <div className={`${styles.paddingY} ${styles.paddingX} container sm:max-w-[600px] max-w-full h-full bg-black flex flex-col justify-center`}>
            <h1 className='text-secondary font-cormorant font-bold sm:text-[60px] text-[40px] '>Our Story</h1>
            <img src={spoon1} alt="" className='sm:w-[60px] w-[30px]'/>
            <p className='font-poppins font-normal sm:text-[18px] text-[14px] sm:leading-[30px] leading-normal text-crimson py-4'>Bulalohan sa Riyadh started in August 2019 at the Sulimaniya area. Our aim is to bring our Filipino concept of restaurant here in Saudi Arabia, where you can enjoy all our cultural food as well as some Asian dishes.</p>
            
        
        </div>
    </section>
  )
}

export default About