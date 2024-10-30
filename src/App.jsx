// src/App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import CanvasBackground from './components/CanvasBackground';
import Container from './components/Container';
import Socials from './components/Socials';

import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://git-repo-screaper-production.up.railway.app/details'
        );
        const data = await response.json();
        setSiteData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CanvasBackground />
      {!siteData ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <main>
          <Container>
            <About
              name={siteData.name}
              image={siteData.image}
              bio={siteData.bio}
              description={siteData.description}
            />
            <Socials socialLinks={siteData.social} />
          </Container>
          <Container>
            <Projects description={siteData.projects.description} />
          </Container>
          <Footer developer={siteData.developer} />
        </main>
      )}
    </>
  );
};

export default App;
