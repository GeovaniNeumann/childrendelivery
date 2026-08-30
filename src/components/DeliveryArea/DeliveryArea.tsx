import styles from "./DeliveryArea.module.css";
import { PHONE_DISPLAY } from "../../lib/whatsapp";

const DeliveryArea = () => {
  return (
    <section id="area" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Area de entrega</p>
          <h2 className={styles.title}>Entregamos em Curitiba e regiao</h2>
          <p className={styles.text}>
            Mora em Curitiba ou na regiao metropolitana? Chama no WhatsApp e
            confirmamos a entrega pra voce.
          </p>

          <ul className={styles.list}>
            <li>Bairros de Curitiba — sob consulta</li>
            <li>Regiao metropolitana — sob consulta</li>
          </ul>

          <div className={styles.contactCard}>
            <div>
              <span>Telefone / WhatsApp</span>
              <strong>{PHONE_DISPLAY}</strong>
            </div>
          </div>
        </div>

        <div className={styles.figure}>
          <img
            src="/images/entrega.webp"
            alt="Entrega de hamburguer Children of Faith Burgers"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default DeliveryArea;