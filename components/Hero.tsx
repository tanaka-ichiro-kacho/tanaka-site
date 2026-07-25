import styles from "./Hero.module.css";

interface HeroProps {
  lead: string;
  description: string;
  badgeTitle: string;
  badgeText: string;
}

export default function Hero({
  lead,
  description,
  badgeTitle,
  badgeText,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.lead}>{lead}</p>
        <p>{description}</p>
      </div>
      <div className={styles.stampBadge}>
        <strong>{badgeTitle}</strong>
        {badgeText}
      </div>
    </section>
  );
}
