import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-doughnutlabel";

const ScoreDoughnut = ({ easyScore }) => {
  const score = Math.round(easyScore);

  const PIXEL_SIZE = 85;

  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#b32727", "#ffff"],
        hoverBackgroundColor: ["#b32727"],
      },
    ],
  };
  const options = {
    tooltips: {
      enabled: false,
    },
    rotation: Math.PI / 0.75,
    cutoutPercentage: 75,
    maintainAspectRation: false,
    legend: {
      display: false,
    },
    plugins: {
      datalabels: {
        display: false,
      },
      doughnutlabel: {
        labels: [
          {
            text: score,
            font: {
              size: "40",
            },
            color: "#b32727",
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
