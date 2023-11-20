import { useState } from 'react'
import { logo, close, menu} from '../assets'


const Navbar = () => {
  const navLinks = [
    {
      id: '/',
      title: 'Home'
    },
    {
      id: 'menu',
      title: 'Menu'
    },
    {
      id: 'about',
      title: 'About'
    },
    
    {
      id: 'events',
      title: 'Events'
    },
    {
      id: 'book',
      title: 'Book'
    },
  ]

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='relative container max-w-full flex flex-row z-10 h-[30px] '>
        <div className='absolute sm:top-[-40px] top-[-20px] border-[12px] border-black bg-slate-100 rounded-full sm:p-6 p-5 cursor-pointer shadow-2xl hover:shadow-sm '>
            <img src={logo} alt="company logo" className='sm:w-[100px] sm:h-[100px] w-[70px] h-[70px ]' />
            
        </div>
        
        
        <div className='container max-w-full flex flex-row justify-end items-start '>
            <ul className='sm:flex hidden text-white font-barlow gap-x-4 tracking-widest cursor-pointer '>
              {navLinks.map(( nav) => (
                  <li
                  key={nav.id} 
                  className='hover:text-secondary '>
                    <a href={`#${nav.id}`} className={`group transition duration-300`} >{nav.title}
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] mt-[0.5px] bg-secondary"/>
                    </a>
                  </li>
              ))}
            </ul>
        </div>

        {/* hamburger menu */}
        <div className='absolute sm:hidden container max-w-full flex flex-1 justify-end items-end '>
            <img 
              src={toggle ? close : menu}
              alt='menu'  
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle((prev) => !prev)}
            
            />
            <div  className={`${toggle ? 'flex' : 'hidden'} p-4 absolute top-11 right-0 my-2 min-w-[100px]  sidebar`}>
              <ul className='list-none flex flex-col justify-center items-center flex-1 '>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-barlow font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-2'} text-white  `}
                  >
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>

                  </li>
                ))}
              </ul>

            </div>
        </div>

    </nav>
  )
}

export default Navbar
