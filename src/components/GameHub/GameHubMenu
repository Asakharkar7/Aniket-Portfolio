import { useState } from "react";
import DataQuizGame from "./DataQuizGame";
import DataSortGame from "./DataSortGame";
import DataToolsGame from "./DataToolsGame";

const games = [
  {
    id: "quiz",
    title: "🧠 Data Quiz",
    description: "Test your knowledge of data concepts.",
  },
  {
    id: "sort",
    title: "📊 Sort by Population",
    description: "Drag countries into correct order by population.",
  },
  {
    id: "tools",
    title: "🧮 Classify Data Tools",
    description: "Place tools into the right categories.",
  },
];

export default function GameHubMenu() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">🎮 Data Arcade</h2>

      {/* Game Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => setActiveGame(game.id)}
            className={`p-4 rounded-lg shadow hover:shadow-xl transition-all border-2 ${
              activeGame === game.id
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
            <p className="text-sm text-slate-600">{game.description}</p>
          </button>
        ))}
      </div>

      {/* Active Game Display */}
      <div className="mt-6">
        {activeGame === "quiz" && <DataQuizGame />}
        {activeGame === "sort" && <DataSortGame />}
        {activeGame === "tools" && <DataToolsGame />}
      </div>
    </div>
  );
}
