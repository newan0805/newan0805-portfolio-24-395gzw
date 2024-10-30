// src/components/About.jsx
import React from 'react';
// import profileImage from '../assets/1640686871560.jpeg';

const About = ({ name, bio, image, description }) => {
  return (
    <section id="about" className="text-white py-10">
      <div className="flex flex-col items-center mb-5">
        {image && (
          <img
            src={image}
            alt="Profile picture"
            className="w-52 h-52 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"
          />
        )}

        {name && (
          <h2 className="text-4xl font-bold mb-2 text-center">{name}</h2>
        )}

        {bio && (
          <p className="text-sm2 font-bold italic text-center mb-4">{bio}</p>
        )}

        {description && (
          <p className="text-sm leading-relaxed text-center mb-4 text-justify max-w-lg mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default About;
