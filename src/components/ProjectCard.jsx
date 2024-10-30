// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, link }) => {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="relative group w-full max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-500"
      whileHover={{ scale: 1.05 }}
    >
      <img src={image} alt={title} className="w-full h-30 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
        <div>
          <h3 className="text-white text-sm font-bold">{title}</h3>
          <p className="text-gray-300 italic text-sm">{description}</p>
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white font-bold py-1 px-2 rounded mt-4"
          >
            Read more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
