import adamsrib1 from '../../assets/img/adamsrib1.png';
import adamsrib2 from '../../assets/img/adamsrib2.png';
import adamsrib3 from '../../assets/img/adamsrib3.png';

/* css */
import styles from './Container.module.scss';

function Container({ children }) {
  return (
    <main className={styles.container}>
      <img
        className={styles.adamsrib1_1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        className={styles.adamsrib2_1}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        className={styles.adamsrib3_1}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        className={styles.adamsrib1_2}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        className={styles.adamsrib2_2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        className={styles.adamsrib3_2}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      {children}
    </main>
  );
}

export default Container;
