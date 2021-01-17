import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Progress } from "antd";
import "chartjs-plugin-doughnutlabel";

const ScoreDoughnut = ({ easyScore }) => {
  const score = Math.round(easyScore);

  const PIXEL_SIZE = 100;

  const data = {
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#9a0000", "#ffff"],
        hoverBackgroundColor: ["#9a0000", "#9a0066"],
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
    <div>
      <div style={{ width: PIXEL_SIZE }}>
        <Doughnut
          data={data}
          options={options}
          width={PIXEL_SIZE}
          height={PIXEL_SIZE}
        />
      </div>
      {/* <Progress
        strokeColor={{
          from: "#9a0000",
          to: "#9a0000",
        }}
        format={() => `${score}`}
        type="circle"
        percent={score}
      /> */}
    </div>
  );
};

export default ScoreDoughnut;
