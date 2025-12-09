import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = ['Tous', 'Web', 'Mobile', 'Design'];
  
  const projects = [
    {
      id: 1,
      title: 'ConciergerieBossiz',
      description: 'Projet de construction de SAAS comme opodo.com pour Bossiz',
      tags: ['PHP', 'Lame', 'javaScript', 'autre'],
      category: 'Web',
      image: '/images/photo.jpg',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Gestion-Reservation',
      description: 'Agent comptoir',
      tags: ['PHP', 'Lame'],
      category: 'Web',
      image: '/images/photo.jpg',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Serveur dorsal',
      description: 'Le back end de Bossiz pour le mensonge au front',
      tags: ['Lame', 'HTML', 'CSS', 'JavaScript', 'SCSS', 'PHP'],
      category: 'Application web',
      image: '/images/photo.jpg',
      github: '#',
      demo: '#'
    },
    // Ajoutez plus de projets ici
  ];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <motion.div 
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projects-header">
        <h1>Mes Projets</h1>
        <p>Découvrez une sélection de mes projets récents et de mes réalisations.</p>
      </div>

      {/* Filtres */}
      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
