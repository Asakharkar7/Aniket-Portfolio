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
      PowerBI: "Visualization",
      R: "Analysis",
      MongoDB: "Storage",
      Airflow: "Storage",
    },
  },
];

const categories = ["Storage", "Analysis", "Visualization"] as const;

export default function DataToolsGame() {
  const [setIndex, setSetIndex] = useState(0);
  const [lists, setLists] = useState<Record<"toolbank" | typeof categories[number], Tool[]>>({
    toolbank: toolSets[0].tools,
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
    const resultSource