import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { buildWhatsAppLink } from "../../lib/whatsapp";

const NAV_LINKS = [
  { href: "#cardapio", label: "Cardapio" },
  { href: "#historia", label: "Nossa historia" },
  { href: "#como-funciona", label: "Como pedir" },
  { href: "#area", label: "Entregamos aqui" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#topo" className={styles.brand}>
          <img
            src="/images/logo.webp"
            alt="Children of Faith Burgers"
            className={styles.logo}
          />
          <span className={styles.brandText}>
            Children of Faith
            <em>Burgers &amp; Delivery</em>
          </span>
        </a>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Navegacao principal"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className={styles.navCta}
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            Pedir agora
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
