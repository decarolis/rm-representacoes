import ContactForm from '../form/ContactForm';

/* css*/
import styles from './Contact.module.scss';

function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Entre em contato conosco</h2>
      <ContactForm />
    </section>
  );
}

export default Contact;
