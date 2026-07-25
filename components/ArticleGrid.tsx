import type { ArticleSummary } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import styles from "./ArticleGrid.module.css";

interface ArticleGridProps {
  articles: ArticleSummary[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
