/* css */
import styles from './ContactForm.module.scss';

function Form() {
  return (
    <div className={styles.contact_container}>
      <form className={styles.form_container}>
        <label>
          Nome <em>&#x2a;</em>
          <input name="customerName" required type="text" />
        </label>

        <label>
          Email <em>&#x2a;</em>
          <input name="customerEmail" required type="email" />
        </label>

        <label>
          Telefone
          <input
            name="customerPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
          />
        </label>
        <label htmlFor="customerNote">
          Sua Mensagem <em>&#x2a;</em>
          <textarea name="customerNote" required rows="6"></textarea>
        </label>
        <button id="customerOrder">ENVIAR</button>
      </form>
    </div>
  );
}

export default Form;
