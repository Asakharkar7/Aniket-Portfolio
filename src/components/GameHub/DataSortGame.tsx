import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";

const sortSets = [
  [
    { id: "1", name: "India", population: 1393 },
    { id: "2", name: "USA", population: 331 },
    { id: "3", name: "Brazil", population: 213 },
  ],
  [
    { id: "1", name: "China", population: 1440 },
    { id: "2", name: "Indonesia", population: 276 },
    { id: "3", name: "Pakistan", population: 225 },
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

export default function DataSortGame() {
  const [setIndex, setSetIndex] = useState(0);
  const [items, setItems] = useState(shuffle(sortSets[0]));
  const [score, setScore] = useState<number | null>(null);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [moved] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, moved);
    setItems(newItems);
  };

  const checkOrder = () => {
    const correct = [...sortSets[setIndex]].sort((a, b) => b.population - a.population);
    let points = 0;
    items.forEach((item, i) => {
      if (item.id === correct[i].id) points++;
    });
    setScore(points);
  };

  const resetGame = () => {
    if (score === items.length) {
      // If perfect, move to next set (or loop back to first)
      const nextIndex = (setIndex + 1) % sortSets.length;
      setSetIndex(nextIndex);
      setItems(shuffle(sortSets[nextIndex]));
    } else {
      // If not perfect, reload same set shuffled
      setItems(shuffle(sortSets[setIndex]));
    }
    setScore(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">📊 Sort Countries by Population</h2>

      {score === null ? (
        <>
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

          <button
            onClick={checkOrder}
            className="mt-6 w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Check Order
          </button>
        </>
      ) : (
        <div className="text-center">
          <p className="mb-4">🎉 You scored {score}/{items.length}</p>
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
