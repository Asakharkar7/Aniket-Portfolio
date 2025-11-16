import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of correct option
}

const quizData: Question[] = [
  {
    id: 1,
    question: "Which SQL clause is used to filter rows?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "JOIN"],
    answer: 1,
  },
  {
    id: 2,
    question: "ETL stands for?",
    options: [
      "Extract, Transform, Load",
      "Evaluate, Test, Learn",
      "Execute, Transfer, Link",
      "Extract, Transfer, Log",
    ],
    answer: 0,
  },
  {
    id: 3,
    question: "Which algorithm is commonly used for classification?",
    options: ["K-Means", "Linear Regression", "Decision Tree", "PCA"],
    answer: 2,
  },
];

export default function DataQuizGame() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === quizData[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Data Quiz Game</h2>

      {!showResult ? (
        <div>
          <p className="text-lg font-medium mb-4">
            {quizData[current].question}
          </p>
          <div className="space-y-2">
            {quizData[current].options.map((opt, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition"
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="mt-4 text-slate-600 text-sm">
            Question {current + 1} of {quizData.length}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">
            🎉 You scored {score} / {quizData.length}
          </p>
          <button
            onClick={resetQuiz}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
