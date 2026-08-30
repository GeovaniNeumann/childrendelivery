import { useMemo } from "react";
import styles from "./Embers.module.css";

interface EmbersProps {
  count?: number;
}

/**
 * Elemento de assinatura visual: brasas subindo, ecoando as faiscas
 * dos posters da marca. Puramente decorativo (aria-hidden).
 */
const Embers = ({ count = 18 }: EmbersProps) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        delay: (Math.random() * 8).toFixed(2),
        duration: (7 + Math.random() * 7).toFixed(2),
        size: (3 + Math.random() * 4).toFixed(1),
        drift: Math.round((Math.random() - 0.5) * 80),
      })),
    [count]
  );

  return (
    <div className={styles.embers} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.ember}
          style={
            {
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default Embers;
