import React, { useState, useEffect, useRef } from "react";
import Chartjs from "chart.js";

const initialGradeValues = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
};

const GradeDistChart = ({ average_grades }) => {
  console.log("dist chart avg: ", average_grades);
  console.log("firstone: ", average_grades[0]);

  const [avgGrades, setAvgGrades] = useState(initialGradeValues);

  useEffect(() => {
    console.log("shabam");
    setAvgGrades({
      A: parseInt(average_grades[0]),
      B: parseInt(average_grades[1]),
      C: parseInt(average_grades[2]),
      D: parseInt(average_grades[3]),
    });
  }, [average_grades]);

  const chartConfig = {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          label: "Grade Distribution",
          data: [avgGrades.A, avgGrades.B, avgGrades.C, avgGrades.D],
          backgroundColor: ["#914949", "#914949", "#914949", "#914949"],
          borderColor: ["#914949", "#914949", "#914949", "#914949"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      response: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            ticks: { display: true },
            gridLines: {
              display: false,
              drawBorder: true,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontSize: 8,
              min: 0,
              max: 4,
              stepSize: 1,
              suggestedMin: 0.5,
              suggestedMax: 5.5,
              beginAtZero: true,
              callback: function (label, index, labels) {
                switch (label) {
                  case 0:
                    return "0%";
                  case 1:
                    return "25%";
                  case 2:
                    return "50%";
                  case 3:
                    return "75%";
                  case 4:
                    return "100%";
                  default:
                    return "%";
                }
              },
            },
          },
        ],
      },
    },
    tooltips: {
      display: false,
      enabled: false,
      displayColors: false,
      titleFontSize: 16,
      bodyFontSize: 14,
      xPadding: 1,
      yPadding: 1,
      callbacks: {
        label: (tooltipItem, data) => {
          return `$ ${tooltipItem.value}`;
        },
      },
    },
  };

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default GradeDistChart;
