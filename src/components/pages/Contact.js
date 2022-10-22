import { useEffect } from 'react';
import ContactForm from '../form/ContactForm';
import ReactGA from 'react-ga';

/* css*/
import styles from './Contact.module.scss';

function Contact() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <section className={styles.contact}>
      <h2>Entre em contato conosco</h2>
      <ContactForm />
    </section>
  );
}

export default Contact;
