import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/votre-username' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/votre-profil' },
    { icon: <FaTwitter />, url: 'https://twitter.com/votre-handle' },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="social-icon"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <p className="copyright">
          © {currentYear} Votre Nom. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
