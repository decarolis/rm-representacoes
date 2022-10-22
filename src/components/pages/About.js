import { useEffect } from 'react';
import ReactGA from 'react-ga';

/* css*/
import styles from './About.module.scss';

function About() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <section className={styles.about}>
      <h2>Sobre a Rocha Muniz</h2>
      <p>
        As mudanças climáticas, o aquecimento global e a pandemia nos fazem
        olhar para o mundo e compreender que certos hábitos precisam ser
        revistos. As questões ambientais são urgentes e a alimentação
        vegetariana é essencial para a saúde humana e do planeta. Somos a Rocha
        Muniz Representações e temos o propósito de democratizar o acesso à
        produtos vegetarianos.
      </p>
      <p>
        Somos apaixonados pela natureza e pelos animais, exploradores em busca
        de novos produtos vegetarianos. Por muito tempo, Raquel possui vasta
        experiência com a área comercial, de forma que compreende que exposição
        adequada de produtos e o diálogo informativo com clientes são
        fundamentais. Vegetariana há quase 15 anos, acredita que um mundo melhor
        é construído cotidianamente.
      </p>
      <p>
        Estamos situados em Petrópolis, Região Serrana do Rio de Janeiro e nos
        deslocamos com facilidade por todo o estado. A Rocha Muniz
        Representações tem como objetivo expandir o mercado de alimentos
        vegetarianos, possibilitando que todas as pessoas tenham acesso à
        produtos de qualidade.
      </p>
      <p>
        Queremos, junto a vocês, trazer mudanças positivas para o mundo e todos
        os seres vivos.
      </p>
    </section>
  );
}

export default About;
