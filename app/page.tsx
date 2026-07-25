import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import SectionLabel from "@/components/SectionLabel";
import ArticleGrid from "@/components/ArticleGrid";
import ArticleDetail from "@/components/ArticleDetail";
import SiteFooter from "@/components/SiteFooter";
import { articleSummaries, articleDetails } from "@/data/articles";

export default function Home() {
  return (
    <div className="wrap">
      <Masthead
        issue="第14号"
        editor="田中一郎"
        title="月刊・田中課長"
        stampLabel={"回覧\n済"}
        subtitle="今日も、昭和の視点で回覧します。― 52歳・課長・田中一郎の生活便り"
      />

      <Hero
        lead="「便利になったのはいいが、納得はしとらん。」"
        description={
          '時代についていくのはやぶさかではない。だが、体と心がついてこないことがある。老眼鏡、腰、晩酌の量。この回覧板は、そういう"課長世代のあるある"を記録し、実際に助けられた道具を淡々と紹介する場所である。'
        }
        badgeTitle="回覧規定"
        badgeText={"広告を含む記事には\n必ず「PR」印を押す"}
      />

      <SectionLabel>今週の回覧</SectionLabel>

      <ArticleGrid articles={articleSummaries} />

      {articleDetails.map((article) => (
        <ArticleDetail key={article.id} article={article} />
      ))}

      <SiteFooter
        disclosure="本サイトはAmazonアソシエイト・プログラムの参加者です。記事内の商品紹介リンクを通じてAmazon.co.jpで購入いただくと、当サイトに紹介料が発生する場合があります。広告を含む記事には本ページのように「PR」表記を付与しています。"
        tagline="月刊・田中課長 ― 昭和の視点で、令和の生活を回覧する。"
      />
    </div>
  );
}
