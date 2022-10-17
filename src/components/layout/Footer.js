import Logo from '../../assets/img/logo192w.png';

/* css */
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          <b>RM Representações</b> &copy; 2022
        </p>
        <p>
          <b>Cnpj:</b> 37.444.301/0001-14
        </p>
        <p>
          <b>Cep:</b> 25655-151
        </p>
        <p>Rua Coronel Veiga, 01/103</p>
        <p>Coronel Veiga - Petrópolis - RJ</p>
      </div>
      <img src={Logo} alt="Logo Rocha Muniz Representações" />
    </footer>
  );
}

export default Footer;
