import type { ArticleCategory } from "./articles";

export type AnswerKey = "A" | "B" | "C";

export interface DiagnosisQuestion {
  id: number;
  text: string;
  options: Record<AnswerKey, string>;
}

export interface DiagnosisResultType {
  typeName: string;
  category: ArticleCategory;
  description: string;
  image: string;
}

export const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    id: 1,
    text: "新しいことを始める時、あなたはどっち?",
    options: {
      A: "無理せず、できる範囲でやる",
      B: "道具や手順にこだわって、じっくり取り組む",
      C: "自分なりのルールを決めて、絶対に崩さない",
    },
  },
  {
    id: 2,
    text: "時短できる家電やツールが出たら?",
    options: {
      A: "ありがたく使う。楽できるならそれでいい",
      B: "便利だけど、あえて手でやる工程も残したくなる",
      C: "効率化されると、逆に物足りなく感じる",
    },
  },
  {
    id: 3,
    text: "周りからよく言われる自分の性格は?",
    options: {
      A: "「無理しない人」「マイペース」",
      B: "「こだわりが強い」「凝り性」",
      C: "「頑固」「一度決めたら曲げない」",
    },
  },
  {
    id: 4,
    text: "年齢を重ねて、一番実感するのは?",
    options: {
      A: "目や耳が、昔より衰えてきたこと",
      B: "新しい道具より、使い慣れたものが安心すること",
      C: "手間をかけることが、逆に贅沢に感じられること",
    },
  },
  {
    id: 5,
    text: "一番しっくりくる自分は?",
    options: {
      A: "頑張りすぎない、現実派",
      B: "手間を惜しまない、職人肌",
      C: "譲れないものがある、頑固派",
    },
  },
];

export const diagnosisResultTypes: Record<AnswerKey, DiagnosisResultType> = {
  A: {
    typeName: "無理しない現実派",
    category: "体のあるある",
    description:
      "あなたは、頑張りすぎないことを知っている人。無理せず、できる範囲でやることを選べる強さがある。田中課長も同じタイプで、見えにくくなった時は意地を張らず、老眼鏡に頼ることを選んでいる。",
    image: "/images/result-genjitsu.png",
  },
  B: {
    typeName: "こだわりの職人肌",
    category: "道具のあるある",
    description:
      "あなたは、手ごたえを大事にする人。効率より、自分が納得できるプロセスを選ぶタイプだ。田中課長も同じタイプで、リモコンより手で風向きを合わせる方を選んでいる。",
    image: "/images/result-shokunin.png",
  },
  C: {
    typeName: "意地っ張りの頑固派",
    category: "晩酌のあるある",
    description:
      "あなたは、一度決めたら曲げない人。周りに何を言われても、自分の中のルールを貫く。田中課長も同じタイプで、危なっかしいと言われても塊氷を手で割ることをやめない。",
    image: "/images/result-ganko.png",
  },
};
