import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const location = useLocation();

  // Gestion du scroll pour l'effet de réduction de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Gestion du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Projets', path: '/projets' },
    { name: 'Contact', path: '/contact' },
  ];

  // Animation des éléments du menu
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Animation du menu mobile
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" aria-label="Accueil">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
        </Link>

        <button 
          className={`menu-icon ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          <FiX className={`menu-icon-x ${isOpen ? 'active' : ''}`} />
          <FiMenu className={`menu-icon-hamburger ${!isOpen ? 'active' : ''}`} />
        </button>

        {/* Menu */}
        {isMobile ? (
          <AnimatePresence>
            {isOpen && (
              <motion.ul 
                className="nav-menu mobile"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    className="nav-item"
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link 
                      to={link.path} 
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        ) : (
          <ul className="nav-menu desktop">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                className="nav-item"
                initial="hidden"
                animate="visible"
                custom={index}
                variants={navItemVariants}
              >
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
