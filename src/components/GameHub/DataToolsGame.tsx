// src/components/gamehub/DataToolsDropGame.tsx
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useState } from "react";

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
type Category = (typeof categories)[number];

export default function DataToolsDropGame() {
  const [lists, setLists] = useState<Record<"toolbank" | Category, Tool[]>>({
    toolbank: initialTools,
    Storage: [],
    Analysis: [],
    Visualization: [],
  });

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
    alert(`✅ You placed ${correct} out of ${initialTools.length} tools correctly.`);
  };

  const resetAll = () => {
    setLists({
      toolbank: initialTools,
      Storage: [],
      Analysis: [],
      Visualization: [],
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">🧠 Classify Data Tools</h2>

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

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={checkAnswers}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Check Placement
        </button>
        <button
          onClick={resetAll}
          className="w-full px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
