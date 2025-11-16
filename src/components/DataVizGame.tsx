import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DataVizGame() {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const data = {
    labels,
    datasets: [
      {
        label: "Sales Growth",
        data: [120, 150, 180, 200, 250, 300],
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "📊 Sales Growth" },
    },
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-12">
      <h2 className="text-2xl font-bold mb-4 text-slate-900 text-center">
        Interactive Data Viz Sandbox
      </h2>
      <Line options={options} data={data} />
    </div>
  );
}
