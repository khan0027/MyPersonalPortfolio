import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='flex flex-row  ' >
        <div className='w-full flex flex-col justify-center items-center gap-10 ' >
            <div className='flex flex-row justify-start items-center w-70' >
                <h2 className='text-2xl font-semibold'  >Hi,I am</h2>
            </div>
            <div className='flex flex-col justify-center items-center gap-3' >
                <h1 className='text-5xl font-semibold' >Md Saqulain</h1>
                <p className='text-gray-500' >Front-end  Developer/Coder</p>
            </div>
            <div className='flex flex-row gap-7 ' >
                <div className='bg-yellow-200 h-10 w-10 rounded-md shadow-gray-600 shadow-md flex justify-center items-center  hover:-translate-y-2 duration-300 cursor-pointer  ' >
                    <FaGithub size={24} />
                </div>
                <div className='bg-yellow-200 h-10 w-10 rounded-md shadow-gray-600 shadow-md flex justify-center items-center  hover:-translate-y-2 duration-300 cursor-pointer  ' >
                    <FaLinkedinIn size={24} />
                </div>
                <div className='bg-yellow-200 h-10 w-10 rounded-md shadow-gray-600 shadow-md flex justify-center items-center  hover:-translate-y-2 duration-300 cursor-pointer  ' >
                    <FaInstagram size={24} />
                </div>
            </div>
        </div>
        <div className='bg-transparent h-0 
            w-full 
            border-b-670 border-b-back 
            border-l-[80px] border-l-transparent 
            border-r-[0px] border-r-transparent
             ' >

        </div>
    </div>
  )
}

export default Home