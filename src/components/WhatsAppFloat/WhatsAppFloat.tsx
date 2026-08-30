import styles from "./WhatsAppFloat.module.css";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const WhatsAppFloat = () => {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className={styles.float}
      aria-label="Chamar no WhatsApp para fazer pedido"
    >
      <span className={styles.pulse} aria-hidden="true" />
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.3.65 4.44 1.78 6.27L4 29l7.94-1.73A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.62 28 15S22.63 3 16.02 3Zm0 21.9c-1.98 0-3.83-.55-5.41-1.5l-.39-.23-4.32.94.93-4.22-.25-.4A9.87 9.87 0 0 1 6.1 15c0-5.48 4.47-9.93 9.92-9.93 5.46 0 9.93 4.45 9.93 9.93 0 5.47-4.47 9.9-9.93 9.9Zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.2 5.08 4.48.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
