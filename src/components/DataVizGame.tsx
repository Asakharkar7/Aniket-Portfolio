import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function DataVizGame() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Test Dataset",
        data: [10, 20, 30, 40],
        borderColor: "blue",
      },
    ],
  };

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <Line data={data} />
    </div>
  );
}
