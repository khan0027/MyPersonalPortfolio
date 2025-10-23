import React, { useState } from 'react';

const Education = ({ title, image, score, rollNo, duration, institution, degree, gradeScale = "Percent", certificateUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='relative flex flex-col h-auto w-80 p-6 gap-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background gradient on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className='relative z-10'>
        {/* Header with logo */}
        <div className='flex items-start gap-4 mb-4'>
          <div className='flex-shrink-0 w-14 h-14 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform duration-300'>
            {image ? (
              <img src={image} alt="" className='w-10 h-10 object-contain' />
            ) : (
              <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>🎓</span>
              </div>
            )}
          </div>
          
          <div className='flex-1 min-w-0'>
            <h3 className='font-bold text-xl text-gray-900 leading-tight group-hover:text-blue-700 transition-colors'>
              {title}
            </h3>
            {institution && (
              <p className='text-sm text-gray-600 font-medium mt-1'>{institution}</p>
            )}
            {degree && (
              <p className='text-xs text-gray-500 mt-0.5'>{degree}</p>
            )}
          </div>
        </div>

        {/* Score highlight */}
        <div className='mb-4 p-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-sm font-medium opacity-90'>Overall Score</p>
              <p className='text-xs opacity-75'>{gradeScale}</p>
            </div>
            <div className='text-right'>
              <p className='text-2xl font-bold'>{score}</p>
            </div>
          </div>
        </div>

        {/* Details grid */}
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='bg-gray-50 rounded-lg p-3'>
            <p className='text-xs text-gray-500 font-medium mb-1'>Roll Number</p>
            <p className='text-sm font-semibold text-gray-900'>{rollNo}</p>
          </div>
          <div className='bg-gray-50 rounded-lg p-3'>
            <p className='text-xs text-gray-500 font-medium mb-1'>Duration</p>
            <p className='text-sm font-semibold text-gray-900'>{duration}</p>
          </div>
        </div>

        {/* Certificate button */}
        {certificateUrl && (
          <button className='w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 group/btn'>
            <span>View Certificate</span>
            <svg className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Education;