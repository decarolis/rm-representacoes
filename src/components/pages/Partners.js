import Brands from '../brands/Brands';

/* css*/
import styles from './Partners.module.scss';

function Partners() {
  return (
    <section className={styles.partners}>
      <h2>Marcas Parceiras</h2>
      <p>
        Com o isolamento social, ficou clara a dificuldade de encontrar
        alimentos saudáveis e criativos nas prateleiras dos mercados, que saiam
        da mesmice do convencional. Surgimos com o intuito de construir uma
        ponte entre empresas que desejam mudar o mundo através de produtos
        vegetarianos e pessoas que buscam maior qualidade de vida.
      </p>
      <Brands
        text1="Vida Veg"
        text2="Bio Blend"
        text3="Açougue Vegano"
        text4="Vegan Way"
      />
    </section>
  );
}

export default Partners;
