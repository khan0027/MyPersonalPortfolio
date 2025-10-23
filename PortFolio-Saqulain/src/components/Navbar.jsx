import React from 'react'
import { IoLogoSlack } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='flex flex-row justify-around items-center fixed top-0 l-0 h-20 z-20 w-full bg-transparent ' >
        <div className='w-full flex justify-center items-center ' >
            <NavLink to='/' >
                <IoLogoSlack color='black' size={30} />
            </NavLink>
        </div>
        <div className='w-full' >
            <ul className='flex flex-row justify-evenly items-center text-gray-200 ' >
                <li >
                    <NavLink className={({isActive}) => `${isActive ? `text-yellow-400 font-bold `:`text-gray-500`}`}  to='/' >Home</NavLink>
                </li>
                <li >
                    <NavLink className={({isActive}) => `${isActive ? `text-yellow-400 font-bold `:`text-gray-500`}`}  to='/about' >About</NavLink>
                </li>
                <li >
                    <NavLink className={({isActive}) => `${isActive ? `text-yellow-400 font-bold `:`text-gray-500`}`}  to='/projects' >Projects</NavLink>
                </li>
                <li >
                    <NavLink className={({isActive}) => `${isActive ? `text-yellow-400 font-bold `:`text-gray-500`}`}  to='/skills' >Skills</NavLink>
                </li>
                <li >
                    <NavLink className={({isActive}) => `${isActive ? `text-yellow-400 font-bold `:`text-gray-500`}`}  to='/contact-me' >Contact Me</NavLink>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar