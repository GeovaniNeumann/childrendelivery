import styles from "./About.module.css";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const About = () => {
  return (
    <section id="historia" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.figure}>
          <img
            src="/images/logo.webp"
            alt="Hamburguer artesanal Children of Faith Burgers, com bacon e queijo derretido"
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>Nossa historia</p>
          <h2 className={styles.title}>
            Fe no processo, capricho em cada camada.
          </h2>
          <p className={styles.text}>
            A Children of Faith nasceu da vontade de fazer hamburguer
            artesanal de verdade: pao macio, blend suculento e recheios
            escolhidos a dedo, sem atalho. Cada lanche sai da chapa como se
            fosse pro nosso proprio jantar.
          </p>
          <p className={styles.text}>
            Entregamos em Curitiba e regiao metropolitana,sempre com agilidade e capricho na
            embalagem para chegar quentinho ate voce.
          </p>

          <div className={styles.stats}>
            <div>
              <strong>100%</strong>
              <span>Artesanal</span>
            </div>
            <div>
              <strong>Feito</strong>
              <span>Na hora do pedido</span>
            </div>
            <div>
              <strong>Curitiba</strong>
              <span>E regiao</span>
            </div>
          </div>

          <a
            className={styles.cta}
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            Fazer meu pedido
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
