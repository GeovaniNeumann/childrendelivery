import styles from "./HowItWorks.module.css";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const STEPS = [
  {
    title: "Escolha o lanche",
    text: "Da uma olhada no cardapio e escolhe o hamburguer que mais te agradou.",
  },
  {
    title: "Chama no WhatsApp",
    text: "Clica no botao, confirma o pedido e o endereco direto na conversa.",
  },
  {
    title: "Recebe quentinho",
    text: "A gente prepara na hora e envia para o seu bairro o mais rapido possivel.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Como pedir</p>
          <h2 className={styles.title}>Do WhatsApp direto pra sua mesa</h2>
        </header>

        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li className={styles.step} key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <a
          className={styles.cta}
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
        >
          Comecar meu pedido
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;