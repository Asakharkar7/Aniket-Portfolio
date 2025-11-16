// src/components/DataSortingGame.tsx
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const countries = [
  { id: "1", name: "USA", population: 331 },
  { id: "2", name: "India", population: 1393 },
  { id: "3", name: "Brazil", population: 213 },
];

export default function DataSortingGame() {
  const [items, setItems] = useState(countries);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [moved] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, moved);
    setItems(newItems);
  };

  const checkOrder = () => {
    const correct = [...countries].sort((a, b) => b.population - a.population);
    const isCorrect = items.every((item, i) => item.id === correct[i].id);
    alert(isCorrect ? "✅ Correct order!" : "❌ Try again!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Sort by Population</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="countries">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                      className="p-4 bg-blue-100 rounded-lg shadow cursor-pointer hover:bg-blue-200">
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
      <button onClick={checkOrder} className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Check Order
      </button>
    </div>
  );
}
