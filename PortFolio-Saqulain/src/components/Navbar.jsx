import React, { useState } from 'react'
import { IoLogoSlack } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact-me', label: 'Contact Me' }
  ];

  return (
    <nav className='sticky top-0 left-0 w-full h-20 z-50 bg-white/80 backdrop-blur-md shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 h-full'>
        <div className='flex justify-between items-center h-full'>
          
          {/* Logo */}
          <div className='flex-shrink-0'>
            <NavLink to='/' onClick={closeMenu}>
              <IoLogoSlack className='text-black hover:text-yellow-500 transition-colors duration-300' size={32} />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex flex-1 justify-center'>
            <ul className='flex space-x-8 lg:space-x-12 items-center'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink 
                    to={link.path}
                    className={({isActive}) => 
                      `text-sm lg:text-base font-medium transition-all duration-300 hover:text-yellow-500 ${
                        isActive 
                          ? 'text-yellow-500 font-semibold border-b-2 border-yellow-500' 
                          : 'text-gray-600'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='p-2 rounded-md text-gray-600 hover:text-yellow-500 hover:bg-gray-100 transition-colors duration-300'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <ul className='flex flex-col py-4'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path}
                  onClick={closeMenu}
                  className={({isActive}) => 
                    `block px-6 py-3 text-base font-medium transition-all duration-300 border-l-4 ${
                      isActive 
                        ? 'text-yellow-500 font-semibold bg-yellow-50 border-yellow-500' 
                        : 'text-gray-600 border-transparent hover:text-yellow-500 hover:bg-gray-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className='fixed inset-0 bg-black/20 z-40 md:hidden'
          onClick={closeMenu}
        />
      )}
    </nav>
  )
}

export default Navbar