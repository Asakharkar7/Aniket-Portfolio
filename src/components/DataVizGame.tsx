import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

// Register only the essentials first
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function DataVizGame() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Test Dataset",
        data: [10, 20, 30, 40],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
      <h2 className="text-xl font-bold mb-4 text-slate-900 text-center">
        Interactive Data Viz Sandbox
      </h2>
      <Line data={data} />
    </div>
  );
}
