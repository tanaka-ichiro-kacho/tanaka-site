import styles from "./PrBadge.module.css";

interface PrBadgeProps {
  children: React.ReactNode;
}

export default function PrBadge({ children }: PrBadgeProps) {
  return <span className={styles.badge}>{children}</span>;
}
