import Link from "next/link";
import styles from "./SiteFooter.module.css";

interface SiteFooterProps {
  disclosure: string;
  tagline: string;
}

export default function SiteFooter({ disclosure, tagline }: SiteFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.disclosure}>{disclosure}</div>
      <div>{tagline}</div>
      <Link href="/tokushoho" className={styles.legalLink}>
        特定商取引法に基づく表記
      </Link>
    </footer>
  );
}
