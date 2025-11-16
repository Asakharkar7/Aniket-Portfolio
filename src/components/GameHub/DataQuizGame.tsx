// src/components/DataQuizGame.tsx
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

const quizData: Question[] = [
  { id: 1, question: "Which SQL clause filters rows?", options: ["ORDER BY", "WHERE", "GROUP BY", "JOIN"], answer: 1 },
  { id: 2, question: "ETL stands for?", options: ["Extract, Transform, Load", "Evaluate, Test, Learn", "Execute, Transfer, Link", "Extract, Transfer, Log"], answer: 0 },
  { id: 3, question: "Which algorithm is used for classification?", options: ["K-Means", "Linear Regression", "Decision Tree", "PCA"], answer: 2 },
];

export default function DataQuizGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === quizData[current].answer) setScore(score + 1);
    if (current + 1 < quizData.length) setCurrent(current + 1);
    else setShowResult(true);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Data Quiz</h2>
      {!showResult ? (
        <>
          <p className="mb-4">{quizData[current].question}</p>
          {quizData[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)} className="w-full mb-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg">
              {opt}
            </button>
          ))}
        </>
      ) : (
        <p className="text-center">🎉 You scored {score}/{quizData.length}</p>
      )}
    </div>
  );
}
