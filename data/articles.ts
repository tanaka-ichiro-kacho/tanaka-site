export type ArticleCategory = "体のあるある" | "道具のあるある" | "晩酌のあるある";

export interface ArticleSummary {
  id: string;
  issue: string;
  category: ArticleCategory;
  categoryIndex: string;
  title: string;
  excerpt: string;
}

export interface ProductPitch {
  tag: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ArticleDetail {
  id: string;
  issue: string;
  category: ArticleCategory;
  author: string;
  title: string;
  prNotice: string;
  paragraphsBeforeQuote: string[];
  quoteLine: string;
  paragraphsAfterQuote: string[];
  product: ProductPitch;
  closingParagraphs: string[];
}

export const articleSummaries: ArticleSummary[] = [
  {
    id: "glasses-01",
    issue: "第13号",
    category: "体のあるある",
    categoryIndex: "体のあるある・01",
    title: "老眼鏡を忘れて始末書を書いた話",
    excerpt: "会議資料の文字が滲んで見えた日。若手には言えなかった理由がある。",
  },
  {
    id: "fan-retro-01",
    issue: "第12号",
    category: "道具のあるある",
    categoryIndex: "道具のあるある・04",
    title: "扇風機のスイッチ、なぜこんなに硬いのか問題",
    excerpt: "「強」まで回すのに指が痛い。実家にあったやつはもっと軽かった。",
  },
  {
    id: "icepick-01",
    issue: "第11号",
    category: "晩酌のあるある",
    categoryIndex: "晩酌のあるある・02",
    title: "氷を割る係は、なぜか課長の仕事である",
    excerpt: "家庭内の序列と、製氷皿の構造には深い関係があると睨んでいる。",
  },
];

export const featuredArticle: ArticleDetail = {
  id: "glasses-01",
  issue: "第13号",
  category: "体のあるある",
  author: "田中一郎",
  title: "老眼鏡を忘れて始末書を書いた話",
  prNotice: "PR ― 本記事は広告(Amazonアソシエイト)を含みます",
  paragraphsBeforeQuote: [
    "先週の火曜、会議資料の数字がどうにも滲んで見えた。若手の前で「これ何桁だ」とは、口が裂けても聞けない。仕方なく、隣の資料をちらちら覗きながら乗り切った。あとで課長席に戻り、こっそり老眼鏡を探したが、家に忘れてきていた。",
  ],
  quoteLine:
    "見えないのは老いではない。老眼鏡を忘れたのが悪い。そう自分に言い聞かせている。",
  paragraphsAfterQuote: [
    "思えば、若い頃は「老眼鏡なんぞ年寄りの道具だ」と笑っていた口である。だが実際になってみると、あれは老いではなく、単なる\"道具の準備不足\"だと分かった。財布や社員証と同じ扱いにすべきものだったのだ。",
  ],
  product: {
    tag: "課長の道具箱",
    heading: "持ち歩き用の老眼鏡を、鞄と机の両方に常備する",
    description:
      "会社用・自宅用で分けて置いておけば、「忘れて始末書」は防げる。度数は市販の既製品でまず様子を見るのが賢明。",
    ctaLabel: "Amazonで確認する(商品リンクの設置例)",
    ctaHref: "#",
  },
  closingParagraphs: [
    "始末書は結局、書かずに済んだ。だが机の引き出しに老眼鏡を1本置いてから、資料の数字で悩むことはなくなった。若手には「老眼鏡を忘れた」とは、まだ言えていない。",
  ],
};
