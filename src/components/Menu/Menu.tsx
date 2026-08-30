import styles from "./Menu.module.css";
import { PRODUCTS } from "../../data/products";
import { buildProductMessage, buildWhatsAppLink } from "../../lib/whatsapp";

const Menu = () => {
  return (
    <section id="cardapio" className={styles.menu}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Cardapio</p>
          <h2 className={styles.title}>Escolha o seu favorito</h2>
          <p className={styles.subtitle}>
            Cada lanche e montado na hora, com ingredientes selecionados.
            Toca no que abrir fome e finaliza o pedido direto no WhatsApp.
          </p>
        </header>

        <div className={styles.list}>
          {PRODUCTS.map((product) => (
            <article className={styles.row} key={product.id}>
              <div className={styles.thumbWrap}>
                <img
                  src={product.poster}
                  alt={product.name}
                  loading="lazy"
                  className={styles.thumb}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.nameRow}>
                  <h3 className={styles.name}>{product.name}</h3>
                  {product.tag && (
                    <span className={styles.badge}>{product.tag}</span>
                  )}
                </div>

                <p className={styles.description}>{product.description}</p>

                {product.highlights.length > 0 && (
                  <p className={styles.ingredients}>
                    {product.highlights.map((h) => (
                      <span key={h}>{h}</span>
                    ))}
                  </p>
                )}
              </div>

              <a
                className={styles.orderBtn}
                href={buildWhatsAppLink(buildProductMessage(product.name))}
                target="_blank"
                rel="noreferrer"
              >
                Pedir
              </a>
            </article>
          ))}
        </div>

        <div className={styles.footNote}>
          <p>
            Nao achou o que procurava? Chama no WhatsApp que a gente te ajuda
            a montar o pedido certo.
          </p>
          <a
            className={styles.footNoteCta}
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;