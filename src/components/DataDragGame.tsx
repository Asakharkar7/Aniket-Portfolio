import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const initialItems = [
  { id: "1", content: "Data Analyst" },
  { id: "2", content: "Data Engineer" },
  { id: "3", content: "Data Scientist" },
];

export default function DataDragGame() {
  const [items, setItems] = useState(initialItems);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [moved] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, moved);
    setItems(newItems);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Drag & Sort the Roles</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="roles">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-4 bg-blue-100 rounded-lg shadow cursor-pointer hover:bg-blue-200 transition"
                    >
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
