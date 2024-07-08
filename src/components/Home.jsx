import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div id="home" className='section max-w-screen-2xl conatiner mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row '>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span className='text-xl'>Welcome In my Feed</span>
      <div className='flex space-x-1 text-2xl md:text-3xl'><h1>Hello,I'm a  </h1>
      <ReactTyped
      className='text-red-700 font-extrabold space-x-2'
          
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backspeed={50}
          loop={true}
        />
        </div>
      <br></br>
      <p className='text-sm md:text-md text-justify'>Here's a brief introduction:

Hi, I'm Yash, a passionate programming enthusiast and web developer by habit. I'm proficient in a range of programming languages, including C++, Java, and Python, and I enjoy crafting innovative solutions and web applications that make a real impact. I'm always looking to expand my skill set, explore new technologies, and collaborate with fellow developers on exciting projects.</p>
<br></br>
<div className='space-y-2'>
  <h1 className='font-bold'>Available on:</h1>
  <ul className='flex space-x-5'>
    <li><a href="https://www.instagram.com/yashkhatri307/" target="_blank"><FaInstagramSquare className='text-2xl cursor-pointer' /></a></li>
    <li><a href="https://www.linkedin.com/in/yash-khatri-77348a240/" target="_blank"><FaLinkedin className='text-2xl cursor-pointer' /></a></li>
    <li><a href="https://www.youtube.com/channel/UC45NdiflnV7zamvLvaT3Qvw" target="_blank">
    <FaYoutube className='text-2xl cursor-pointer' /></a></li>
    <li><RiWhatsappFill className='text-2xl cursor-pointer' /></li>
    
  </ul>
  <div className=" space-y-2 ">
  <h1 className="font-bold ">Currently working on:</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
  </div>
</div>
</div>
      <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
      <img src="images/mypic.jpg " className='rounded-full md:w-[450px] '></img>

      </div>
      </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Home