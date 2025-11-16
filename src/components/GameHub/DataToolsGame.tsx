import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const initialTools = [
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

const categories = ["Storage", "Analysis", "Visualization"];

export default function DataToolsDropGame() {
  const [tools, setTools] = useState(initialTools);
  const [zones, setZones] = useState<Record<string, typeof initialTools>>({
    Storage: [],
    Analysis: [],
    Visualization: [],
  });

  const handleDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;

    // Dragging from tool list
    if (source.droppableId === "toolbank") {
      const dragged = tools[source.index];
      const newTools = Array.from(tools);
      newTools.splice(source.index, 1);
      const newZone = Array.from(zones[destination.droppableId]);
      newZone.splice(destination.index, 0, dragged);
      setTools(newTools);
      setZones({ ...zones, [destination.droppableId]: newZone });
    }
    // Dragging between zones
    else {
      const sourceZone = Array.from(zones[source.droppableId]);
      const [moved] = sourceZone.splice(source.index, 1);
      const destZone = Array.from(zones[destination.droppableId]);
      destZone.splice(destination.index, 0, moved);
      setZones({
        ...zones,
        [source.droppableId]: sourceZone,
        [destination.droppableId]: destZone,
      });
    }
  };

  const checkAnswers = () => {
    let correct = 0;
    for (const category of categories) {
      for (const tool of zones[category]) {
        if (correctCategories[tool.name] === category) correct++;
      }
    }
    alert(`✅ You placed ${correct} out of ${initialTools.length} tools correctly.`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">🧠 Classify Data Tools</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* Tool Bank */}
        <Droppable droppableId="toolbank" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex gap-4 mb-6 flex-wrap justify-center"
            >
              {tools.map((tool, index) => (
                <Draggable key={tool.id} draggableId={tool.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="px-4 py-2 bg-blue-100 rounded-lg shadow hover:bg-blue-200 cursor-pointer"
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

        {/* Drop Zones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Droppable droppableId={cat} key={cat}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="min-h-[120px] p-4 bg-slate-100 rounded-lg shadow"
                >
                  <h3 className="text-lg font-semibold mb-2 text-center">{cat}</h3>
                  {zones[cat].map((tool, index) => (
                    <Draggable key={tool.id} draggableId={tool.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-2 px-4 py-2 bg-blue-200 rounded-lg shadow cursor-pointer"
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
    </div>
  );
}
