import { useEffect } from 'react';
import Logo from '../../assets/img/logo1024.png';
import Brands from '../brands/Brands';
import ContactForm from '../form/ContactForm';
import ReactGA from 'react-ga';

/* css*/
import styles from './Home.module.scss';

function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <section className={styles.home}>
      <div className={styles.title}>
        <img src={Logo} alt="" />
        <h1>Rocha Muniz Representações</h1>
        <h2>
          A alimentação vegetariana é essencial para a saúde humana e
          sustentabilidade do planeta.
        </h2>
      </div>
      <Brands
        text1="Vida Veg"
        text2="Bio Blend"
        text3="Açougue Vegano"
        text4="Vegan Way"
      />
      <div className={styles.contact_div}>
        <h2>Entre em contato conosco</h2>
        <ContactForm />
      </div>
    </section>
  );
}

export default Home;
