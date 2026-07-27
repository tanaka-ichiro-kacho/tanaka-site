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
  {
    id: "glasses-01-izakaya",
    issue: "第14号",
    category: "体のあるある",
    categoryIndex: "体のあるある・02",
    title: "老眼鏡を忘れて居酒屋のメニューを意地で注文したら、知らない料理が来た話",
    excerpt: "品書きの文字が読めず、意地で頼んだら知らない料理が来た。",
  },
];

export const articleDetails: ArticleDetail[] = [
  {
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
      ctaLabel: "Amazonで確認する",
      ctaHref: "https://link.amazon/B08n8jDDj",
    },
    closingParagraphs: [
      "始末書は結局、書かずに済んだ。だが机の引き出しに老眼鏡を1本置いてから、資料の数字で悩むことはなくなった。若手には「老眼鏡を忘れた」とは、まだ言えていない。",
    ],
  },
  {
    id: "fan-retro-01",
    issue: "第12号",
    category: "道具のあるある",
    author: "田中一郎",
    title: "扇風機のスイッチ、なぜこんなに硬いのか問題",
    prNotice: "PR ― 本記事は広告(Amazonアソシエイト)を含みます",
    paragraphsBeforeQuote: [
      "扇風機の「強」まで回すのに、毎回指が痛くなる。実家にあった年代物の扇風機はもっと軽く回せたはずだが、今使っているものはやけに硬い。安物だからだろうと思っていたが、どうも違う話らしいと最近知った。",
    ],
    quoteLine: "手応えがあるのは、安っぽくないという意味ではないらしい。",
    paragraphsAfterQuote: [
      "調べてみると、昔の家電のスイッチが重かったのは、誤操作を防ぐための設計だったそうだ。今のスイッチは軽さと静音性を優先するあまり、手応えそのものを削っている製品も多いという。硬いのが不便なのではなく、ただ雑に作られているだけの製品もある、ということらしい。",
    ],
    product: {
      tag: "課長の道具箱",
      heading: "昔ながらの手応えを再現した、レトロデザインの扇風機に替える",
      description:
        "回すたびにカチッと決まる感触が、実家の扇風機を思い出させる。安っぽい軽さのスイッチに慣れていた指には、むしろ心地よい。",
      ctaLabel: "Amazonで確認する",
      ctaHref: "https://link.amazon/B07pkha2X",
    },
    closingParagraphs: [
      "新しい扇風機に替えてから、「強」まで回すのがそれほど苦にならなくなった。実家の扇風機と同じ手応えだと言ったら、妻には「そんなに大事な話か」と笑われたが、課長としては譲れないところである。",
    ],
  },
  {
    id: "icepick-01",
    issue: "第11号",
    category: "晩酌のあるある",
    author: "田中一郎",
    title: "氷を割る係は、なぜか課長の仕事である",
    prNotice: "PR ― 本記事は広告(Amazonアソシエイト)を含みます",
    paragraphsBeforeQuote: [
      "晩酌の準備で、氷を出す係は決まって自分である。妻も子どもも冷蔵庫を開けはするが、製氷皿から氷を取り出す段になると、なぜか誰も手を出さない。硬くて割れない、指が冷たい、という理由らしいが、毎回自分に回ってくるのは納得がいかない。",
    ],
    quoteLine:
      "家庭内の序列は、製氷皿の硬さで決まっているのではないかと睨んでいる。",
    paragraphsAfterQuote: [
      "思えば実家の製氷皿は、もっと簡単に氷が外れる作りだった。今使っているものは氷同士がくっつき、ひねっても割れず、結局アイスピックの出番になる。道具が変われば、係の人選まで変わるものらしい。",
    ],
    product: {
      tag: "課長の道具箱",
      heading: "氷離れの良い製氷皿と、専用アイスピックを常備する",
      description:
        "ひねるだけで氷が外れる作りに替えれば、力任せに割る必要がなくなる。アイスピックは念のための保険として、引き出しに一つ置いておけば十分。",
      ctaLabel: "Amazonで確認する",
      ctaHref: "https://link.amazon/B0gGab8pM",
    },
    closingParagraphs: [
      "新しい製氷皿にしてからは、氷出しを頼まれる回数がむしろ増えた。簡単になった分、断る理由もなくなったということらしい。役割というのは、こうして静かに固定されていくのだろう。",
    ],
  },
  {
    id: "glasses-01-izakaya",
    issue: "第14号",
    category: "体のあるある",
    author: "田中一郎",
    title: "老眼鏡を忘れて居酒屋のメニューを意地で注文したら、知らない料理が来た話",
    prNotice: "PR ― 本記事は広告(Amazonアソシエイト)を含みます",
    paragraphsBeforeQuote: [
      "先日の飲み会、居酒屋の品書きの文字がやたら小さくて読めなかった。若手に「これは何て書いてあるんだ」とは聞けず、なんとなく雰囲気で「これでいいよな」と頼んだら、想像していたものとまるで違う一品が運ばれてきた。",
    ],
    quoteLine:
      "見栄を張って注文すると、皿の上には知らない相手が座っていることがある。",
    paragraphsAfterQuote: [
      "昔の居酒屋の品書きは、太い毛筆の文字で品数も少なく、店に入れば大体の勝手が分かったものだ。今は写真付きでおしゃれだが、字は小さく品数も多い。選択肢が増えた分、見えなければ選びようがないという話でもある。",
    ],
    product: {
      tag: "課長の道具箱",
      heading: "外出用の老眼鏡を、鞄にもう一本追加する",
      description:
        "鞄の内ポケットに、携帯ケース付きの老眼鏡を一本入れておけば、薄暗い店内でもさっと取り出して品書きを確認できる。会議用に机に置いている一本とは別に、外出用としてもう一本用意しておくと安心だ。",
      ctaLabel: "Amazonで確認する",
      ctaHref: "https://link.amazon/B08n8jDDj",
    },
    closingParagraphs: [
      "結局、運ばれてきた料理はそれはそれで悪くなかった。だが鞄に老眼鏡さえあれば、意地を張る必要もなかったのだと、猪口を傾けながら思ったものである。",
    ],
  },
];
