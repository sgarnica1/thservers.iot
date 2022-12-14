import React from "react";
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
import "./linechart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ title, datasets, labels, scales }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        text: title,
        display: true,
        position: "top",
        fullSize: true,
        align: "center",
        padding: 10,
      },
    },
    scales: {
      y: {
        max: scales.max,
        min: scales.min,
        ticks: {
          stepSize: 0.5,
        },
      },
      x: {
        display: false,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <section className="LineChart">
      <Line data={data} options={options} />
    </section>
  );
};

export { LineChart };
