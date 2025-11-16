import { useState } from "react";

export default function DataGuessGame() {
  const questions = [
    {
      question: "📊 In 2024, global data created and replicated reached ___ zettabytes.",
      options: ["50", "120", "180", "250"],
      answer: "180",
    },
    {
      question: "💻 What percentage of companies use cloud data warehouses?",
      options: ["35%", "55%", "75%", "90%"],
      answer: "75%",
    },
    {
      question: "📈 The average data analyst spends ___% of time cleaning data.",
      options: ["20%", "40%", "60%", "80%"],
      answer: "60%",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (option: string) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setCurrent((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
        🎮 Data Guessing Game
      </h2>
      <p className="text-slate-700 mb-6">{questions[current].question}</p>

      <div className="grid grid-cols-2 gap-4">
        {questions[current].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={`px-4 py-2 rounded-lg border ${
              selected === option
                ? option === questions[current].answer
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-4 text-center">
          {selected === questions[current].answer ? (
            <p className="text-green-600 font-semibold">✅ Correct!</p>
          ) : (
            <p className="text-red-600 font-semibold">
              ❌ Wrong! Correct answer: {questions[current].answer}
            </p>
          )}
          <button
            onClick={nextQuestion}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next Question
          </button>
        </div>
      )}

      <p className="mt-6 text-slate-600 text-center">
        Score: {score} / {questions.length}
      </p>
    </div>
  );
}
