import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

const initialItems = [
  { id: "1", name: "India", population: 1393 },
  { id: "2", name: "USA", population: 331 },
  { id: "3", name: "Brazil", population: 213 },
];

export default function DataSortGame() {
  const [items, setItems] = useState(initialItems);
  const [score, setScore] = useState<number | null>(null);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [moved] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, moved);
    setItems(newItems);
  };

  const checkOrder = () => {
    const correct = [...initialItems].sort((a, b) => b.population - a.population);
    let points = 0;
    items.forEach((item, i) => {
      if (item.id === correct[i].id) points++;
    });
    setScore(points);
  };

  const resetGame = () => {
    setItems(initialItems);
    setScore(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">📊 Sort Countries by Population</h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="countries">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2 min-h-[160px] bg-slate-50 p-4 rounded-lg"
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-blue-100 rounded-lg shadow cursor-grab hover:bg-blue-200 active:cursor-grabbing"
                    >
                      {item.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={checkOrder}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Check Order
        </button>
        <button
          onClick={resetGame}
          className="w-full px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition"
        >
          Play Again
        </button>
      </div>

      {score !== null && (
        <p className="mt-4 text-center">🎉 You scored {score}/{items.length}</p>
      )}
    </div>
  );
}
