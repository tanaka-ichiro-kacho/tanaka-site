import type { Metadata } from "next";
import Link from "next/link";
import Masthead from "@/components/Masthead";
import DiagnosisQuiz from "@/components/DiagnosisQuiz";
import SiteFooter from "@/components/SiteFooter";
import { latestIssue } from "@/data/articles";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "あなたは田中課長のどのタイプか診断 | 月刊・田中課長",
  description:
    "5つの質問に答えると、あなたが田中課長のどのタイプ(現実派・職人肌・頑固派)に近いか分かる診断コンテンツです。",
};

export default function DiagnosisPage() {
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

      <DiagnosisQuiz />

      <SiteFooter
        disclosure="本サイトはAmazonアソシエイト・プログラムの参加者です。記事内の商品紹介リンクを通じてAmazon.co.jpで購入いただくと、当サイトに紹介料が発生する場合があります。広告を含む記事には本ページのように「PR」表記を付与しています。"
        tagline="月刊・田中課長 ― 昭和の視点で、令和の生活を回覧する。"
      />
    </div>
  );
}
