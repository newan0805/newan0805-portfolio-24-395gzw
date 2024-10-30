// src/components/Projects.jsx
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  const fetchProjectData = async () => {
    try {
      const response = await fetch(
        'https://git-repo-screaper-production.up.railway.app/'
      );
      const data = await response.json();
      setProjectData(data);
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  return (
    <section id="projects" className="p-10">
      <h2 className="text-3xl font-bold mb-5">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
