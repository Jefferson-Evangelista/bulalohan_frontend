import React from 'react'
import { Subheading } from '../components'
import styles from '../style'
import Button from './Button'

const Contacts = () => {
  return (
    <section className={`${styles.paddingX} ${styles.paddingY} container max-w-full bg-black text-white`}>
      <div className='container max-w-2xl border-white border-2 '>
        <Subheading title='Location'/>
          <div className='flex flex-col gap-y-6 mb-14'>
            <h1 className='font-cormorant font-bold text-[60px] text-secondary'>Discover Us</h1>
            <p className='font-poppins tracking-[2px]'>2265f Agoncillo St, Malate, Manila, 1004 Metro Manila</p>

          </div>
          <div className='container max-w-full '>
            <h1 className='font-cormorant font-bold text-[22px] text-secondary mb-3 '>Opening Hours</h1>
            <div className='container max-w-[320px] flex flex-row justify-between'>
              <div className='font-poppins tracking-wide flex flex-col justify-end items-end'>
                <p>Mon - Sat:</p>
                <p>Sun:</p>
              </div>
              <div className='font-poppins tracking-widest'>
                <p> 8:00 AM to 10:00 PM</p>
                <p> CLOSED</p>
              </div>
            </div>

            <button className='mt-14 font-cormorant font-bold text-[20px] text-black tracking-[1px] border-2 bg-secondary border-secondary hover:border-white duration-400 px-2 pt-1 group leading-none'>Book Now
            
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-700 h-[1px] bg-black mb-1 "/>
            </button>
            
           
           </div>
      </div>
      
      
    </section>
  )
}

export default Contacts