import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="hero">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bonjour, je suis <span>Abraham Soro</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="subtitle"
        >
          Développeur Full Stack & Créatif
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="cta-buttons"
        >
          <Link to="/projets" className="btn primary">
            Voir mes projets
          </Link>
          <Link to="/contact" className="btn secondary">
            Me contacter
          </Link>
        </motion.div>
      </div>
      
      <div className="skills-section">
        <h2>Compétences</h2>
        <div className="skills-grid">
          {['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Firebase'].map((skill, index) => (
            <motion.div 
              key={skill} 
              className="skill-card"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
