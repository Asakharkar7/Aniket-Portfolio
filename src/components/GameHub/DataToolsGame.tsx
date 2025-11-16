import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const categories = {
  storage: "Storage",
  analysis: "Analysis",
  visualization: "Visualization",
};

const tools = [
  { id: "1", name: "SQL", category: "storage" },
  { id: "2", name: "Python", category: "analysis" },
  { id: "3", name: "Tableau", category: "visualization" },
  { id: "4", name: "Spark", category: "analysis" },
  { id: "5", name: "Snowflake", category: "storage" },
];

export default function DataToolsGame() {
  const [items, setItems] = useState(tools);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [moved] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, moved);
    setItems(newItems);
  };

  const checkAnswers = () => {
    const correct = items.every((item) => item.category === item.category);
    alert("✅ Tools are placed! (This can be extended to validate categories)");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Sort the Data Tools</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tools">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {items.map((tool, index) => (
                <Draggable key={tool.id} draggableId={tool.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-blue-100 rounded-lg shadow cursor-pointer hover:bg-blue-200 transition"
                    >
                      {tool.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button
        onClick={checkAnswers}
        className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Check Placement
      </button>
    </div>
  );
}
