import styles from "./Hero.module.css";
import Embers from "../Embers/Embers";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const Hero = () => {
  return (
    <section id="topo" className={styles.hero}>
      <Embers count={22} />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Curitiba &amp; regiao · delivery</p>
          <h1 className={styles.title}>
            Comida com fe,
            <span>sabor que reina.</span>
          </h1>
          <p className={styles.subtitle}>
            Hamburgueres artesanais, blend selecionado e recheios que nao
            pedem licenca. Chama no WhatsApp e recebe quentinho na sua casa.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.primaryCta}
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              Pedir no WhatsApp
            </a>
            <a className={styles.secondaryCta} href="#cardapio">
              Ver cardapio
            </a>
          </div>

          <ul className={styles.badges}>
            <li>Blend artesanal</li>
            <li>Feito na hora</li>
            <li>Entrega rapida</li>
          </ul>
        </div>

        <div className={styles.figure}>
          <div className={styles.figureRing} aria-hidden="true" />
          <img
            src="/images/logo.webp"
            alt="Hamburguer artesanal Children of Faith, com bacon crocante, queijo derretido e molho especial"
            className={styles.heroImage}
          />
          <span className={styles.crownBadge} aria-hidden="true">
            Escolha real
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
