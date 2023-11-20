import React from 'react'
import { spoon } from '../assets'

const Subheading = ({  title }) => {
  return (
    <div>
        <p className='font-cormorant font-semibold text-[23px] text-white tracking-[2px]'>{ title }</p>
        <img src={ spoon } alt="spoon" />
    </div>
  )
}

export default Subheading