import capaacougue from '../../assets/img/acougue/capaacougue.jpeg';
import A_Cheddar_vegano from '../../assets/img/acougue/A_Cheddar_vegano.png';
import B_Almondega_Shiitake from '../../assets/img/acougue/B_Almondega_Shiitake.png';
import B_Carne_de_Jaca from '../../assets/img/acougue/B_Carne_de_Jaca.png';
import B_Carne_Moida from '../../assets/img/acougue/B_Carne_Moida.png';
import B_Feijoada_Vegana_dourada from '../../assets/img/acougue/B_Feijoada_Vegana_dourada.png';
import B_Kafta from '../../assets/img/acougue/B_Kafta.png';
import B_Moqueca from '../../assets/img/acougue/B_Moqueca.png';
import B_picadinho from '../../assets/img/acougue/B_picadinho.png';
import B_Strogonoff from '../../assets/img/acougue/B_Strogonoff.png';
import C_Espetinho_Misto from '../../assets/img/acougue/C_Espetinho_Misto.png';
import C_Espetinho_Vegano from '../../assets/img/acougue/C_Espetinho_Vegano.png';
import D_Coxinha_de_Jaca from '../../assets/img/acougue/D_Coxinha_de_Jaca.png';
import D_Coxinha_Espinafre from '../../assets/img/acougue/D_Coxinha_Espinafre.png';
import E_D_Burger_Grão_de_Bico from '../../assets/img/acougue/E_D_Burger_Grão_de_Bico.png';
import E_D_Shiitake_Burger from '../../assets/img/acougue/E_D_Shiitake_Burger.png';
import Z_Linguica from '../../assets/img/acougue/Z_Linguica.png';
import Z_Salsicha from '../../assets/img/acougue/Z_Salsicha.png';

/* css*/
import styles from './Brands.module.scss';

function AcougueVegano() {
  return (
    <>
      <img
        className={`${styles.img_main} ${styles.img_main_acougue}`}
        src={capaacougue}
        alt="Imagem capa Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={A_Cheddar_vegano}
        alt="Imagem Cheddar_vegano Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_Almondega_Shiitake}
        alt="Imagem Almondega_Shiitake Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_Carne_de_Jaca}
        alt="Imagem Carne_de_Jaca Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_Carne_Moida}
        alt="Imagem Carne_Moida Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_Feijoada_Vegana_dourada}
        alt="Imagem Feijoada_Vegana_dourada Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_Kafta}
        alt="Imagem Kafta Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_Moqueca}
        alt="Imagem Moqueca Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_picadinho}
        alt="Imagem picadinho Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={B_Strogonoff}
        alt="Imagem Strogonoff Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={C_Espetinho_Misto}
        alt="Imagem Espetinho_Misto Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={C_Espetinho_Vegano}
        alt="Imagem Espetinho_Vegano Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={D_Coxinha_de_Jaca}
        alt="Imagem Coxinha_de_Jaca Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={D_Coxinha_Espinafre}
        alt="Imagem Coxinha_Espinafre Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={E_D_Burger_Grão_de_Bico}
        alt="Imagem Burger_Grão_de_Bico Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={E_D_Shiitake_Burger}
        alt="Imagem Shiitake_Burger Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={Z_Linguica}
        alt="Imagem Linguica Açougue Vegano"
      />
      <img
        className={styles.img_products}
        src={Z_Salsicha}
        alt="Imagem Salsicha Açougue Vegano"
      />
    </>
  );
}

export default AcougueVegano;
