import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <motion.div 
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>À Propos de Moi</h1>
          <p>
            Passionné par le développement web et la création d'expériences utilisateur exceptionnelles, 
            je mets mes compétences en développement full-stack au service de projets innovants.
          </p>
          <p>
            Avec une solide expérience dans les technologies modernes comme React, Node.js et les bases de données NoSQL, 
            je crée des applications web performantes et évolutives.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="image-placeholder">
            {/* Remplacez par votre photo de profil */}
            <span>Votre Photo</span>
          </div>
        </motion.div>
      </div>
      
      <div className="experience-section">
        <h2>Expérience Professionnelle</h2>
        <div className="timeline">
          {[
            {
              title: 'Développeur Full Stack',
              company: 'Entreprise Actuelle',
              period: '2022 - Présent',
              description: 'Développement et maintenance d\'applications web avec React et Node.js.'
            },
            {
              title: 'Développeur Frontend',
              company: 'Entreprise Précédente',
              period: '2020 - 2022',
              description: 'Création d\'interfaces utilisateur réactives et accessibles.'
            }
          ].map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <h3>{exp.title}</h3>
              <p className="company">{exp.company} • {exp.period}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
