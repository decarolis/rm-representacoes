import { useEffect, useLayoutEffect, useState } from 'react';

/* brands */
import VidaVeg from './VidaVeg';
import BioBlend from './BioBlend';
import AcougueVegano from './AcougueVegano';
import VeganWay from './VeganWay';

/* css */
import styles from './Brands.module.scss';

function Brands({ text1, text2, text3, text4 }) {
  const [visibleElement, setVisibleElement] = useState('vidaveg');

  useEffect(() => {
    if (visibleElement) {
      document.querySelector(`#${visibleElement}`).scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [visibleElement]);

  useLayoutEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          console.log('oi ' + entries[0].target.id);
          console.log(entries[0]);
          setVisibleElement(entries[0].target.id);
        }
      },
      {
        threshold: 0.8,

        /* required options*/
        // trackVisibility: true,
        // delay: 100, // minimum 100
      },
    );
    intersectionObserver.observe(document.querySelector('#acouguevegano'));
    intersectionObserver.observe(document.querySelector('#vidaveg'));
    intersectionObserver.observe(document.querySelector('#bioblend'));
    intersectionObserver.observe(document.querySelector('#veganway'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div className={styles.brands_container}>
      <div className={styles.brand_box}>
        <div
          className={`${styles.brand_title} ${
            visibleElement === 'vidaveg' ? styles.brand_title_visible : ''
          }`}
        >
          <span>{text1}</span>
        </div>
        <div
          id="vidaveg"
          className={`${styles.brand_content} ${styles.brand_vidaveg} ${
            visibleElement === 'vidaveg' ? styles.brand_visible : ''
          }`}
        >
          <VidaVeg />
        </div>
      </div>
      <div className={styles.brand_box}>
        <div
          className={`${styles.brand_title} ${
            visibleElement === 'bioblend' ? styles.brand_title_visible : ''
          }`}
        >
          <span>{text2}</span>
        </div>
        <div
          id="bioblend"
          className={`${styles.brand_content} ${styles.brand_bioblend} ${
            visibleElement === 'bioblend' ? styles.brand_visible : ''
          }`}
        >
          <BioBlend />
        </div>
      </div>
      <div className={styles.brand_box}>
        <div
          className={`${styles.brand_title} ${
            visibleElement === 'veganway' ? styles.brand_title_visible : ''
          }`}
        >
          <span>{text4}</span>
        </div>
        <div
          id="veganway"
          className={`${styles.brand_content} ${styles.brand_veganway} ${
            visibleElement === 'veganway' ? styles.brand_visible : ''
          }`}
        >
          <VeganWay />
        </div>
      </div>
      <div className={styles.brand_box}>
        <div
          className={`${styles.brand_title} ${
            visibleElement === 'acouguevegano' ? styles.brand_title_visible : ''
          }`}
        >
          <span>{text3}</span>
        </div>
        <div
          id="acouguevegano"
          className={`${styles.brand_content} ${styles.brand_acougue} ${
            visibleElement === 'acouguevegano' ? styles.brand_visible : ''
          }`}
        >
          <AcougueVegano />
        </div>
      </div>
    </div>
  );
}

export default Brands;
