import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({ data, label }) => {
  const options = {
    plugins: {
      title: {
        display: true,
        text: label,
      },
      responsive: true,
    },
  };
  return <Pie data={data} options={options} />;
};

export default PieChart;
