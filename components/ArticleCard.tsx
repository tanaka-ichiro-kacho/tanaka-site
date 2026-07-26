import Link from "next/link";
import type { ArticleSummary } from "@/data/articles";
import styles from "./ArticleCard.module.css";

interface ArticleCardProps {
  article: ArticleSummary;
  readLabel?: string;
}

export default function ArticleCard({
  article,
  readLabel = "既読",
}: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.stampCorner}>{readLabel}</div>
      <span className={styles.cat}>{article.category}</span>
      <h3>
        <Link href={`/articles/${article.id}`} className={styles.titleLink}>
          {article.title}
        </Link>
      </h3>
      <p>{article.excerpt}</p>
      <div className={styles.meta}>
        <span>{article.issue}</span>
        <span>{article.categoryIndex}</span>
      </div>
    </article>
  );
}
