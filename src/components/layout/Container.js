import { useEffect, useState } from 'react';
import adamsrib1 from '../../assets/img/adamsrib1.png';
import adamsrib2 from '../../assets/img/adamsrib2.png';
import adamsrib3 from '../../assets/img/adamsrib3.png';

/* css */
import styles from './Container.module.scss';

let mounted;

function Container({ children }) {
  const [offset, setOffset] = useState(0);
  const [imgDif, setImgDif] = useState(window.innerWidth >= 768 ? 1150 : 570);

  useEffect(() => {
    function handleResize() {
      clearTimeout(mounted);
      mounted = setTimeout(() => {
        if (window.innerWidth >= 768) {
          setImgDif(1150);
        } else {
          setImgDif(570);
        }
      }, 500);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className={styles.container}>
      <img
        style={{ top: `${-(offset * 0.5)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 2)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 2)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 2)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 3)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 3)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 3)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 4)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 4)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 4)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 5)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 5)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 5)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 6)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 6)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 6)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 7)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 7)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 7)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 8)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 8)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 8)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 9)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 9)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 9)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 10)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 10)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 10)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 11)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 11)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 11)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 12)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 12)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 12)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 13)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 13)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 13)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 14)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 14)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 14)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 15)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 15)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 15)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 16)}px` }}
        className={styles.adamsrib1}
        src={adamsrib1}
        alt="Folha costela de adão 1"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 16)}px` }}
        className={styles.adamsrib2}
        src={adamsrib2}
        alt="Folha costela de adão 2"
      />
      <img
        style={{ top: `${-(offset * 0.5 - imgDif * 16)}px` }}
        className={styles.adamsrib3}
        src={adamsrib3}
        alt="Folha costela de adão 3"
      />
      {children}
    </main>
  );
}

export default Container;
