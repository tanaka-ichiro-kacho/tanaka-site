import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import SiteFooter from "@/components/SiteFooter";
import { latestIssue } from "@/data/articles";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 月刊・田中課長",
  description: "月刊・田中課長の運営者情報です。",
};

const entries = [
  { term: "運営者名", value: "株式会社LUKE Projects" },
  {
    term: "所在地",
    value: "〒150-0043 東京都渋谷区道玄坂1丁目10-8 渋谷道玄坂東急ビル2F-C",
  },
  { term: "連絡先", value: "h-kawakami@luke-projects.com" },
  { term: "運営統括責任者", value: "川上弘明" },
];

export default function TokushohoPage() {
  return (
    <div className="wrap">
      <Masthead
        issue={latestIssue}
        editor="田中一郎"
        title="月刊・田中課長"
        stampLabel={"回覧\n済"}
        subtitle="今日も、昭和の視点で回覧します。― 52歳・課長・田中一郎の生活便り"
      />

      <Link href="/" className={styles.backLink}>
        ← 回覧一覧に戻る
      </Link>

      <div className={styles.panel}>
        <h1 className={styles.title}>特定商取引法に基づく表記</h1>
        <dl className={styles.list}>
          {entries.map((entry) => (
            <div className={styles.row} key={entry.term}>
              <dt className={styles.term}>{entry.term}</dt>
              <dd className={styles.value}>{entry.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <SiteFooter
        disclosure="本サイトはAmazonアソシエイト・プログラムの参加者です。記事内の商品紹介リンクを通じてAmazon.co.jpで購入いただくと、当サイトに紹介料が発生する場合があります。広告を含む記事には本ページのように「PR」表記を付与しています。"
        tagline="月刊・田中課長 ― 昭和の視点で、令和の生活を回覧する。"
      />
    </div>
  );
}
