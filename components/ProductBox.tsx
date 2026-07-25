import type { ProductPitch } from "@/data/articles";
import styles from "./ProductBox.module.css";

interface ProductBoxProps {
  product: ProductPitch;
}

export default function ProductBox({ product }: ProductBoxProps) {
  return (
    <div className={styles.box}>
      <span className={styles.tag}>{product.tag}</span>
      <h4>{product.heading}</h4>
      <p>{product.description}</p>
      <a
        className={styles.approveBtn}
        href={product.ctaHref}
        rel="sponsored noopener"
      >
        {product.ctaLabel}
      </a>
    </div>
  );
}
