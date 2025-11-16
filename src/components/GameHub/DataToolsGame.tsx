import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

type Tool = { id: string; name: string };

const toolSets = [
  {
    tools: [
      { id: "1", name: "SQL" },
      { id: "2", name: "Python" },
      { id: "3", name: "Tableau" },
      { id: "4", name: "Spark" },
      { id: "5", name: "Snowflake" },
    ],
    correct: {
      SQL: "Storage",
      Python: "Analysis",
      Tableau: "Visualization",
      Spark: "Analysis",
      Snowflake: "Storage",
    },
  },
  {
    tools: [
      { id: "1", name: "Excel" },
      { id: "2", name: "Power BI" },
      { id: "3", name: "R" },
      { id: "4", name: "MongoDB" },
      { id: "5", name: "Airflow" },
    ],
    correct: {
      Excel: "Visualization",
      "Power BI": "Visualization",
      R: "Analysis",
      MongoDB: "Storage",
      Airflow: "Storage",
    },
  },
];

const categories = ["Storage", "Analysis", "Visualization"] as const;

// Utility to shuffle array
function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function DataToolsGame() {
  const [setIndex, setSetIndex] = useState(0);
  const [lists, setLists] = useState<Record<"toolbank" | typeof categories[number], Tool[]>>({
    toolbank: shuffle(toolSets[0].tools),
    Storage: [],
    Analysis: [],
    Visualization: [],
  });
  const [score, setScore] = useState<number | null>(null);

  const moveItem = (
    sourceList: Tool[],
    destList: Tool[],
    sourceIndex: number,
    destIndex: number
  ) => {
    const resultSource = Array.from(sourceList);
    const resultDest = Array.from(destList);
    const [moved] = resultSource.splice(sourceIndex, 1);
    resultDest.splice(destIndex, 0, moved);
    return { resultSource, resultDest };
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const from = source.droppableId as keyof typeof lists;
    const to = destination.droppableId as keyof typeof lists;

    const { resultSource, resultDest } = moveItem(
      lists[from],
      lists[to],
      source.index,
      destination.index
    );

    setLists({
      ...lists,
      [from]: resultSource,
      [to]: resultDest,
    });
  };

  const checkAnswers = () => {
    let correctCount = 0;
    const currentSet = toolSets[setIndex];
    for (const cat of categories) {
      for (const tool of lists[cat]) {
        if (currentSet.correct[tool.name] === cat) correctCount++;
      }
    }
    setScore(correctCount);
  };

  const resetGame = () => {
    if (score === toolSets[setIndex].tools.length) {
      // If perfect, move to next set (or loop back to first)
      const nextIndex = (setIndex + 1) % toolSets.length;
      setSetIndex(nextIndex);
      setLists({
        toolbank: shuffle(toolSets[nextIndex].tools),
        Storage: [],
        Analysis: [],
        Visualization: [],
      });
    } else {
      // If not perfect, reload same set shuffled
      setLists({
        toolbank: shuffle(toolSets[setIndex].tools),
        Storage: [],
        Analysis: [],
        Visualization: [],
      });
    }
    setScore(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">🧮 Classify Data Tools</h2>

      {score === null ? (
        <>
          <DragDropContext onDragEnd={onDragEnd}>
            {/* Tool Bank */}
            <Droppable droppableId="toolbank" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex gap-3 mb-6 flex-wrap justify-center min-h-[84px] bg-slate-50 p-4 rounded-lg"
                >
                  {lists.toolbank.map((tool, index) => (
                    <Draggable key={tool.id} draggableId={tool.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="px-4 py-2 bg-blue-100 rounded-lg shadow hover:bg-blue-200 cursor-grab active:cursor-grabbing"
                        >
                          {tool.name}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Droppable droppableId={cat} key={cat}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-[160px] p-4 bg-slate-100 rounded-lg shadow"
                    >
                      <h3 className="text-lg font-semibold mb-3 text-center">{cat}</h3>
                      {lists[cat].map((tool, index) => (
                        <Draggable key={tool.id} draggableId={tool.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="mb-2 px-4 py-2 bg-blue-200 rounded-lg shadow cursor-grab active:cursor-grabbing"
                            >
                              {tool.name}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>

          <button
            onClick={checkAnswers}
            className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Check Placement
          </button>
        </>
      ) : (
        <div className="text-center">
          <p className="mb-4">🎉 You scored {score}/{toolSets[setIndex].tools.length}</p>
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
