import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

/* css */
import styles from './ContactForm.module.scss';

function Form() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hjh21qx',
        'template_u8f5kt2',
        form.current,
        'm69KViFMgtkeKlg_c',
      )
      .then(
        () => {
          e.target.reset();
          setErrorMessage('');
          setSuccessMessage('Sua mensagem foi enviada com sucesso!');
        },
        () => {
          setSuccessMessage('');
          setErrorMessage('Houve um erro ao enviar sua mensagem!');
        },
      );
  };

  return (
    <div className={styles.contact_container}>
      <form ref={form} onSubmit={sendEmail} className={styles.form_container}>
        <label>
          Nome <em>&#x2a;</em>
          <input name="user_name" required type="text" />
        </label>

        <label>
          Email <em>&#x2a;</em>
          <input name="user_email" required type="email" />
        </label>

        <label>
          Telefone
          <input name="user_phone" type="tel" />
        </label>
        <label htmlFor="customerNote">
          Sua Mensagem <em>&#x2a;</em>
          <textarea name="message" required rows="6"></textarea>
        </label>
        <button id="customerOrder">ENVIAR</button>
        {successMessage && <p className={styles.success}>{successMessage}</p>}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Form;
