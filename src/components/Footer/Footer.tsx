import styles from "./Footer.module.css";
import { buildWhatsAppLink, PHONE_DISPLAY } from "../../lib/whatsapp";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <a href="#topo" className={styles.brand}>
            <img
              src="/images/logo.webp"
              alt="Children of Faith Burgers"
              className={styles.logo}
            />
            <span>
              Children of Faith
              <em>Burgers &amp; Delivery</em>
            </span>
          </a>

          <a
            className={styles.cta}
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            Pedir no WhatsApp
          </a>
        </div>

        <div className={styles.grid}>
          <div>
            <h4>Contato</h4>
            <p>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>Pedidos somente pelo WhatsApp</p>
          </div>

          <div>
            <h4>Atendimento</h4>
            <p>Curitiba e regiao</p>
          </div>

          <div>
            <h4>Navegacao</h4>
            <p><a href="#cardapio">Cardapio</a></p>
            <p><a href="#historia">Nossa historia</a></p>
            <p><a href="#area">Entregamos aqui</a></p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} Children of Faith Burgers. Todos os direitos reservados.</p>
          <p>Feito com fe e muito bacon crocante.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;