import { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        date: serverTimestamp()
      });
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Contactez-moi</h1>
          <p>
            Vous avez une question ou souhaitez discuter d'un projet ?
            N'hésitez pas à me contacter via le formulaire ou directement par email.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <div>
                <h3>Email</h3>
                <p>abrahamsoror@email.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <div>
                <h3>Localisation</h3>
                <p>Abidjan, Cote d'Ivoire</p>
              </div>
            </div>
            
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <div>
                <h3>Téléphone</h3>
                <p>+225 07 68 09 91 97</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {status === 'success' ? (
            <div className="success-message">
              <h3>Message envoyé avec succès !</h3>
              <p>Je vous répondrai dès que possible.</p>
              <button 
                onClick={() => setStatus('')}
                className="btn primary"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {status === 'error' && (
                <div className="error-message">
                  Une erreur est survenue. Veuillez réessayer plus tard.
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
