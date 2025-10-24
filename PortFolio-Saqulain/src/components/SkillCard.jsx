import React from 'react';

const SkillCard = ({ title, logo, category }) => {
  // You can use the category prop for conditional styling if needed
  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend':
        return 'border-blue-200 bg-blue-50 hover:bg-blue-100';
      case 'backend':
        return 'border-green-200 bg-green-50 hover:bg-green-100';
      case 'database':
        return 'border-purple-200 bg-purple-50 hover:bg-purple-100';
      case 'language':
        return 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100';
      default:
        return 'border-gray-200 bg-gray-50 hover:bg-gray-100';
    }
  };

  return (
    <div className={`
      flex flex-col items-center justify-center 
      p-6 rounded-xl border-2 
      transition-all duration-300 
      hover:scale-105 hover:shadow-lg
      cursor-pointer
      ${getCategoryColor(category)}
    `}>
      {/* Skill Icon */}
      <div className="text-gray-700 mb-3">
        {logo}
      </div>
      
      {/* Skill Title */}
      <h3 className="text-lg font-semibold text-gray-800 text-center">
        {title}
      </h3>
    </div>
  );
};

export default SkillCard;