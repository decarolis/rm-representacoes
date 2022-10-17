import ContactForm from '../form/ContactForm';

/* css*/
import styles from './Contact.module.scss';

function Contact() {
  return (
    <section className={styles.contact}>
      <ContactForm />
    </section>
  );
}

export default Contact;
