import React from 'react'

const Button = ({ title }) => (
    <button className='text-title px-4 py-[8px] max-w-fit rounded-md group transition duration-300 leading-none font-cormorant font-bold tracking-wide  sm:text-[18px] text-[12px]'>{title}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1.5px] mt-[4px] bg-title"/></button>
  )


export default Button