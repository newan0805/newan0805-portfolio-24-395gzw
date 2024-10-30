// src/components/Container.jsx
import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container-bg min-h-screen max-w-4xl mx-auto overflow-hidden h-screen">
      <div className="scrollable-content">{children}</div>
    </div>
  );
};

export default Container;
