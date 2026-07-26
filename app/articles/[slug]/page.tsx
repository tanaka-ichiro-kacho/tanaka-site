import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Masthead from "@/components/Masthead";
import ArticleDetail from "@/components/ArticleDetail";
import SiteFooter from "@/components/SiteFooter";
import { articleDetails } from "@/data/articles";
import styles from "./page.module.css";

export const dynamicParams = false;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articleDetails.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articleDetails.find((item) => item.id === slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | 月刊・田中課長`,
    description: article.paragraphsBeforeQuote[0],
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articleDetails.find((item) => item.id === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="wrap">
      <Masthead
        issue="第14号"
        editor="田中一郎"
        title="月刊・田中課長"
        stampLabel={"回覧\n済"}
        subtitle="今日も、昭和の視点で回覧します。― 52歳・課長・田中一郎の生活便り"
      />

      <Link href="/" className={styles.backLink}>
        ← 回覧一覧に戻る
      </Link>

      <ArticleDetail article={article} />

      <SiteFooter
        disclosure="本サイトはAmazonアソシエイト・プログラムの参加者です。記事内の商品紹介リンクを通じてAmazon.co.jpで購入いただくと、当サイトに紹介料が発生する場合があります。広告を含む記事には本ページのように「PR」表記を付与しています。"
        tagline="月刊・田中課長 ― 昭和の視点で、令和の生活を回覧する。"
      />
    </div>
  );
}
