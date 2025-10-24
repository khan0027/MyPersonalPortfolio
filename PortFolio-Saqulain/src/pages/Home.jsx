import React, { useState } from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import myimage from "../assets/myImg1.png"

const Home = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialLinks = [
        { 
            icon: <FaGithub size={24} />, 
            name: "Github", 
            url: "https://github.com/yourusername" 
        },
        { 
            icon: <FaLinkedinIn size={24} />, 
            name: "Linkedin", 
            url: "https://linkedin.com/in/yourusername" 
        },
        { 
            icon: <FaInstagram size={24} />, 
            name: "Instagram", 
            url: "https://instagram.com/yourusername" 
        }
    ];

    const handleIconClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-white to-gray-50'>
            {/* Left Content Section */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 mb-8 lg:mb-0'>
                <div className='w-full max-w-md'>
                    <h2 className='text-2xl sm:text-3xl font-semibold text-gray-700 mb-2'>
                        Hi, I am
                    </h2>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
                        Md Saqulain
                    </h1>
                    <p className='text-lg sm:text-xl text-gray-600 mb-8'>
                        Front-end Developer / Coder
                    </p>
                </div>

                {/* Social Icons */}
                <div className='flex flex-row gap-6 sm:gap-8 mt-4'>
                    {socialLinks.map((social, index) => (
                        <div 
                            key={index}
                            className='flex flex-col gap-2 items-center group'
                        >
                            <div 
                                onMouseEnter={() => setHoveredIcon(social.name)}
                                onMouseLeave={() => setHoveredIcon(null)}
                                onClick={() => handleIconClick(social.url)}
                                className='bg-yellow-200 h-12 w-12 sm:h-14 sm:w-14 rounded-lg shadow-md flex justify-center items-center hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:bg-yellow-300 group'
                            >
                                {social.icon}
                            </div>
                            <p className={`text-xs font-semibold text-gray-700 transition-all duration-200 ${
                                hoveredIcon === social.name ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                            }`}>
                                {social.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image/Graphic Section */}
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <div className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                    {/* Placeholder for your image - Replace with actual image */}
                    <div className='w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full shadow-2xl flex items-center justify-center'>
                        <img src={myimage} alt=""  className='rounded-full rotate-9 '/>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl'></div>
                    <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl'></div>
                </div>
            </div>
        </div>
    )
}

export default Home