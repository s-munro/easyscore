import React from "react";
// import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-doughnutlabel";

const ScoreDoughnut = ({ easyScore }) => {
  const score = Math.round(easyScore);

  const PIXEL_SIZE = 100;

  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#914949", "#ffff"],
        hoverBackgroundColor: ["#914949"],
      },
    ],
  };

  const options = {
    rotation: Math.PI / 0.75,
    cutoutPercentage: 75,
    maintainAspectRation: false,
    legend: {
      display: false,
    },
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: score,
            font: {
              size: "40",
            },
            color: "black",
          },
        ],
      },
    },
  };

  return (
    <div style={{ width: PIXEL_SIZE }}>
      <Doughnut
        data={data}
        options={options}
        width={PIXEL_SIZE}
        height={PIXEL_SIZE}
      />
    </div>
  );
};

export default ScoreDoughnut;
