// src/App.jsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import CanvasBackground from "./components/CanvasBackground";
import Container from "./components/Container";
import Socials from "./components/Socials";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [siteData, setSiteData] = useState(null);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://git-repo-screaper-production.up.railway.app/details"
        );
        const data = await response.json();
        setSiteData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const toggleVisibility = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <>
      <CanvasBackground />
      {showContent && siteData ? (
        <main>
          <Header toggleVisibility={toggleVisibility} />
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
      ) : (
        <main
          className="flex justify-center items-center text-white cursor-pointer"
          onClick={toggleVisibility}
        >
          <p className="text-sm p-1">Click to return to the main content</p>
        </main>
      )}
    </>
  );
};

export default App;
