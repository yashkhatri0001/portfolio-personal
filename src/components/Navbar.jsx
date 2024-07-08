import React, { useState } from 'react'
import { BiFoodMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import { Link } from 'react-scroll';

function Navbar() {
  const [menu,setMenu]=useState(false)
  return (
    <div className='bg-white max-w-screen-2xl containermx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 '>
      <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
          <img src="images/mypic.jpg " className='h-12 w-12 rounded-full'></img>
          <h1 className='font-semiboldtext-xl cursor-pointer font-semibold'>Yash <span className='text-green-500 text-2xl'>Khatri</span>
          <p className='text-sm'>Programming-enthusiast</p></h1>
        </div>
        <div>
          <ul className='hidden md:flex space-x-8 hover:scale-105 duration-200 cursor-pointer'>
            <li className='hover:scale-105 duration-200 cursor-pointer'>
            
            <a href="#home">Home</a>
              </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>
            <a href="#about">About</a>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>
            <a href="#portfolio">Portfolio</a>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>
            <a href="#experience">Experience</a>
            </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>
            <Link
      to="contacts"
      smooth={true}
      duration={500}
      offset={-70}
      activeClass="active"
      spy={true}
    >
              <a href="#contacts">Contacts</a>
              </Link>
              
              </li>
          </ul>
          <div onClick={()=>setMenu(!menu)}  className='md:hidden'>{menu?
            <ImCross size={20} />:<BiFoodMenu size={28}/>}
          </div>
        </div>
      </div>
      {
        menu && (
          <div className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4 '>
        <li className='hover:scale-105 duration-200 cursor-pointer'>
          Home
          
          </li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>About</li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>Portfolio</li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>Experience</li>
            <li className='hover:scale-105 duration-200 cursor-pointer'>Contacts</li>
        </ul>
        
      </div>
        )
      }
      
    </div>
  )
}

export default Navbar