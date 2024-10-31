// src/components/Header.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCompass, FaCrop } from "react-icons/fa";

const Header = ({ toggleVisibility }) => {
  // Define animation variants
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      variants={headerVariants}
      className="text-white p-5 flex justify-between items-center relative"
    >
      <div className="absolute top-5 right-5">
        <button
          onClick={toggleVisibility}
          aria-label="Toggle Visibility"
          className="focus:outline-none"
        >
          <FaCrop tabIndex="0" />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
