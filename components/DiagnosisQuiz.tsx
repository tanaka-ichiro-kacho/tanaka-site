"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import SectionLabel from "./SectionLabel";
import {
  diagnosisQuestions,
  diagnosisResultTypes,
  type AnswerKey,
} from "@/data/diagnosis";
import { getLatestArticlesByCategory } from "@/data/articles";
import styles from "./DiagnosisQuiz.module.css";

type Stage = "start" | "question" | "result";

const SHARE_URL = "https://tanaka-site-two.vercel.app/diagnosis";

function determineResultKey(answers: AnswerKey[]): AnswerKey {
  const counts: Record<AnswerKey, number> = { A: 0, B: 0, C: 0 };
  for (const answer of answers) {
    counts[answer] += 1;
  }

  const maxCount = Math.max(counts.A, counts.B, counts.C);
  const topKeys = (Object.keys(counts) as AnswerKey[]).filter(
    (key) => counts[key] === maxCount,
  );

  if (topKeys.length === 1) {
    return topKeys[0];
  }

  for (let i = answers.length - 1; i >= 0; i -= 1) {
    if (topKeys.includes(answers[i])) {
      return answers[i];
    }
  }

  return topKeys[0];
}

export default function DiagnosisQuiz() {
  const [stage, setStage] = useState<Stage>("start");
  const [answers, setAnswers] = useState<AnswerKey[]>([]);

  function handleStart() {
    setAnswers([]);
    setStage("question");
  }

  function handleAnswer(key: AnswerKey) {
    const nextAnswers = [...answers, key];
    setAnswers(nextAnswers);
    if (nextAnswers.length === diagnosisQuestions.length) {
      setStage("result");
    }
  }

  function handleRetake() {
    setAnswers([]);
    setStage("start");
  }

  if (stage === "start") {
    return (
      <div className={styles.panel}>
        <h1 className={styles.title}>あなたは田中課長のどのタイプか診断</h1>
        <p className={styles.lead}>
          5つの質問に答えると、あなたが田中課長のどのタイプに近いか分かります。
        </p>
        <button
          type="button"
          className={styles.startButton}
          onClick={handleStart}
        >
          診断スタート
        </button>
      </div>
    );
  }

  if (stage === "question") {
    const currentQuestion = diagnosisQuestions[answers.length];
    const optionKeys = Object.keys(currentQuestion.options) as AnswerKey[];

    return (
      <div className={styles.panel}>
        <p className={styles.progress}>
          Q{answers.length + 1} / {diagnosisQuestions.length}
        </p>
        <h2 className={styles.question}>{currentQuestion.text}</h2>
        <div className={styles.options}>
          {optionKeys.map((key) => (
            <button
              key={key}
              type="button"
              className={styles.optionButton}
              onClick={() => handleAnswer(key)}
            >
              <span className={styles.optionKey}>{key}</span>
              <span>{currentQuestion.options[key]}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const resultKey = determineResultKey(answers);
  const result = diagnosisResultTypes[resultKey];
  const recommendedArticles = getLatestArticlesByCategory(
    result.category,
    2,
  );
  const shareText = `私は${result.typeName}でした。あなたは?\n${SHARE_URL}`;
  const threadsUrl = `https://www.threads.net/intent/post?text=${encodeURIComponent(shareText)}`;

  return (
    <div className={styles.panel}>
      <div className={styles.resultHeader}>
        <span className={styles.typeStamp}>{result.typeName}</span>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export has no image loader configured */}
        <img
          src={result.image}
          alt={result.typeName}
          className={styles.resultImage}
        />
      </div>
      <p className={styles.description}>{result.description}</p>
      <a
        className={styles.shareButton}
        href={threadsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        診断結果をシェアする
      </a>

      {recommendedArticles.length > 0 && (
        <div className={styles.recommended}>
          <SectionLabel>あなたにおすすめの記事</SectionLabel>
          <div className={styles.recommendedGrid}>
            {recommendedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.retakeButton}
        onClick={handleRetake}
      >
        もう一度診断する
      </button>
    </div>
  );
}
