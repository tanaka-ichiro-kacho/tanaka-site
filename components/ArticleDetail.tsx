import type { ArticleDetail as ArticleDetailType } from "@/data/articles";
import PrBadge from "./PrBadge";
import ProductBox from "./ProductBox";
import styles from "./ArticleDetail.module.css";

interface ArticleDetailProps {
  article: ArticleDetailType;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <div className={styles.article}>
      <PrBadge>{article.prNotice}</PrBadge>
      <h2>{article.title}</h2>
      <div className={styles.byline}>
        {article.issue} ／ {article.category} ／ 発行:{article.author}
      </div>

      <div className={styles.bodyText}>
        {article.paragraphsBeforeQuote.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p className={styles.quoteLine}>{article.quoteLine}</p>
        {article.paragraphsAfterQuote.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <ProductBox product={article.product} />

      <div className={styles.bodyText}>
        {article.closingParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
