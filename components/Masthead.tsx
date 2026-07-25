import styles from "./Masthead.module.css";

interface MastheadProps {
  issue: string;
  editor: string;
  title: string;
  stampLabel: string;
  subtitle: string;
}

export default function Masthead({
  issue,
  editor,
  title,
  stampLabel,
  subtitle,
}: MastheadProps) {
  return (
    <header className={styles.masthead}>
      <div className={styles.top}>
        <span>社内報 兼 生活便り</span>
        <span className={styles.issue}>
          {issue} / 発行:{editor}
        </span>
      </div>
      <div className={styles.title}>
        <span>{title}</span>
        <span className={styles.stampMini}>{stampLabel}</span>
      </div>
      <div className={styles.subtitle}>{subtitle}</div>
    </header>
  );
}
