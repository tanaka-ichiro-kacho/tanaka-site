import Link from "next/link";
import styles from "./DiagnosisPromo.module.css";

export default function DiagnosisPromo() {
  return (
    <div className={styles.box}>
      <span className={styles.tag}>今週の余興</span>
      <h3>あなたは田中課長のどのタイプか診断</h3>
      <p>5つの質問に答えると、あなたが田中課長のどのタイプに近いか分かります。</p>
      <Link href="/diagnosis" className={styles.link}>
        診断してみる
      </Link>
    </div>
  );
}
