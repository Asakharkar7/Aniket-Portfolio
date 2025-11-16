import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number; // index of correct option in original array
}

const quizSets: Question[][] = [
  [
    { id: 1, question: "Which SQL clause filters rows?", options: ["ORDER BY", "WHERE", "GROUP BY", "JOIN"], answer: 1 },
    { id: 2, question: "ETL stands for?", options: ["Extract, Transform, Load", "Evaluate, Test, Learn", "Execute, Transfer, Link", "Extract, Transfer, Log"], answer: 0 },
    { id: 3, question: "Which algorithm is used for classification?", options: ["K-Means", "Linear Regression", "Decision Tree", "PCA"], answer: 2 },
  ],
  [
    { id: 1, question: "Which chart shows distribution?", options: ["Bar", "Pie", "Histogram", "Line"], answer: 2 },
    { id: 2, question: "Which tool is best for dashboards?", options: ["Excel", "Tableau", "Python", "Snowflake"], answer: 1 },
    { id: 3, question: "Which is a NoSQL DB?", options: ["PostgreSQL", "MongoDB", "MySQL", "Oracle"], answer: 1 },
  ],
];

// Utility to shuffle array
function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Shuffle options while keeping track of correct answer index
function shuffleQuestionOptions(question: Question): Question {
  const options = [...question.options];
  const correctAnswer = options[question.answer];
  const shuffled = shuffle(options);
  return {
    ...question,
    options: shuffled,
    answer: shuffled.indexOf(correctAnswer),
  };
}

export default function DataQuizGame() {
  const [setIndex, setSetIndex] = useState(0);
  const [quizData, setQuizData] = useState<Question[]>(quizSets[0].map(shuffleQuestionOptions));
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === quizData[current].answer) setScore(score + 1);

    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetGame = () => {
    if (score === quizData.length) {
      // If perfect, move to next set (or loop back to first)
      const nextIndex = (setIndex + 1) % quizSets.length;
      setSetIndex(nextIndex);
      setQuizData(quizSets[nextIndex].map(shuffleQuestionOptions));
    } else {
      // If not perfect, reload same set shuffled
      setQuizData(quizSets[setIndex].map(shuffleQuestionOptions));
    }
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">🧠 Data Quiz</h2>

      {!showResult ? (
        <>
          <p className="mb-4">{quizData[current].question}</p>
          {quizData[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full mb-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg"
            >
              {opt}
            </button>
          ))}
        </>
      ) : (
        <div className="text-center">
          <p className="mb-4">🎉 You scored {score}/{quizData.length}</p>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
