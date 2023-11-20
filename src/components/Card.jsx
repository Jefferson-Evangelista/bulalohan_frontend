import React from 'react'

const Card = ({ img, title, detail }) => (

    <div className='container sm:max-w-[300px] max-w-[230px] h-fit flex flex-col justify-start items-center text-center '>
        <img src={img} alt="food" className='sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] border-8  border-[#FEE4C5] rounded-full object-cover '/>
        <div className='flex flex-col gap-y-[0.5px] mt-4'>
            <h1 className='font-poppins font-medium sm:text-[18px] text-[14px]tracking-[1px] uppercase'>{title}</h1>
            <p className='font-poppins sm:text-[13.5px] text-[12px] text-dimwhite'>{detail}</p>
        </div>
    </div>

)


export default Card