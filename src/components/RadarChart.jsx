// RadarChart.js
import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const data = {
    labels: ["Teamwork", "Leadership", "Adaptability", "Communication", "Problem-solving", "Creativity", "Patience", "Time-management"],
    datasets: [
      {
        label: "",
        data: [9, 6, 8, 9, 7, 9, 7, 8], // Adjust these values based on your skill levels
        backgroundColor: "rgba(255, 215, 175, 0.2)",
        borderColor: "#431407",
        pointBackgroundColor: "#431407",
        pointBorderColor: "#431407",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(153, 102, 255, 1)",
      },
    ],
  };

  const options = {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          stepSize: 1,
          showLabelBackdrop: false,
          display: false,
        },
        pointLabels: {
          font: {
            size: 14,
            family: "chewy",
            style: "normal",
            weight: "bold",
          },
          color: "#FEEDD5", // Adjust color as needed
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChart;
