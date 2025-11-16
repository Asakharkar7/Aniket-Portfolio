import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

type Tool = { id: string; name: string };

const initialTools: Tool[] = [
  { id: "1", name: "SQL" },
  { id: "2", name: "Python" },
  { id: "3", name: "Tableau" },
  { id: "4", name: "Spark" },
  { id: "5", name: "Snowflake" },
];

const correctCategories: Record<string, string> = {
  SQL: "Storage",
  Python: "Analysis",
  Tableau: "Visualization",
  Spark: "Analysis",
  Snowflake: "Storage",
};

const categories = ["Storage", "Analysis", "Visualization"] as const;

export default function DataToolsGame() {
  const [lists, setLists] = useState<Record<"toolbank" | typeof categories[number], Tool[]>>({
    toolbank: initialTools,
    Storage: [],
    Analysis: [],
    Visualization: [],
  });
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

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
    let correct = 0;
    for (const cat of categories) {
      for (const tool of lists[cat]) {
        if (correctCategories[tool.name] === cat) correct++;
      }
    }
    setScore(correct);
    setShowResult(true);
  };

  const resetGame = () => {
    setLists({
      toolbank: initialTools,
      Storage: [],
      Analysis: [],
      Visualization: [],
    });
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">🧠 Classify Data Tools</h2>
      {!showResult ? (
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
          <p className="mb-4">🎉 You scored {score}/{initialTools.length}</p>
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
