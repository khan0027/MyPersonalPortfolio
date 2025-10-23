import React, { useState } from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import myImg from '../assets/myImg.png'

const Home = () => {

    const [hovered,setHovered] = useState(false);
    function handleHover(){
        setHovered(!hovered);
    }


  return (
    <div className='flex flex-row  ' >
        <div className='w-full flex flex-col justify-center items-center gap-10 ' >
            <div className='flex flex-row justify-start items-center w-70' >
                <h2 className='text-2xl font-semibold'  >Hi,I am ,</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-3' >
                <h1 className='text-5xl font-semibold' >Md Saqulain</h1>
                <p className='text-gray-500' >Front-end  Developer/Coder</p>
            </div>
            {/* Icons Are handled here */}
            <div className='flex flex-row gap-8 absolute bottom-42' >
                
                <div className='flex flex-col gap-3 items-center ' >
                    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='bg-yellow-200 h-10 w-10 rounded-md shadow-gray-600 shadow-md flex justify-center items-center  hover:-translate-y-2 duration-300 cursor-pointer  ' >
                        <FaGithub size={24} />
                    </div>
                    <p className={`text-xs font-semibold relative ${hovered ? `visible`:`invisible`} `} >
                        Github
                    </p>
                </div>

                <div className='flex flex-col gap-3 items-center ' >
                    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='bg-yellow-200 h-10 w-10 rounded-md shadow-gray-600 shadow-md flex justify-center items-center  hover:-translate-y-2 duration-300 cursor-pointer  ' >
                        <FaLinkedinIn size={24} />
                    </div>
                    <p className={`text-xs font-semibold relative ${hovered ? `visible`:`invisible`} `} >
                        Linkedin
                    </p>
                </div>
                
                <div className='flex flex-col gap-3  items-center ' >
                    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='bg-yellow-200 h-10 w-10 rounded-md shadow-gray-600 shadow-md flex justify-center items-center  hover:-translate-y-2 duration-300 cursor-pointer  ' >
                        <FaInstagram size={24} />
                    </div>
                    <p className={`text-xs font-semibold relative ${hovered ? `visible`:`invisible`} `} >
                        Instagram
                    </p>
                </div>

            </div>
        </div>
        <div className='bg-transparent h-0 
            w-full 
            border-b-705 border-b-back 
            border-l-[80px] border-l-transparent 
            border-r-[0px] border-r-transparent

             ' >
        </div>
    </div>
  )
}

export default Home