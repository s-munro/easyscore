import React from "react";
import { Bar } from "react-chartjs-2";

const GradeDistChart = ({ average_grades, pixels }) => {
  let data = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        barPercentage: 1,
        categoryPercentage: 0.5,
        label: "Grade %",
        data: [
          `${parseInt(average_grades[0])}`,
          `${parseInt(average_grades[1])}`,
          `${parseInt(average_grades[2])}`,
          `${parseInt(average_grades[3])}`,
        ],
        backgroundColor: ["#b32727", "#b32727", "#b32727", "#b32727"],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        width={pixels.width}
        height={pixels.height}
        options={{
          responsive: false,
          layout: {},
          maintainAspectRatio: true,
          title: {
            display: false,
            text: "Grade Distribution",
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  display: true,
                  fontColor: "black",
                  fontSize: 8,
                  mirror: true,
                },
                gridLines: {
                  display: false,
                  drawBorder: true,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: true,
                  fontSize: 6,
                  stepSize: 25,
                  min: 0,
                  max: 100,
                  beginAtZero: true,
                  callback: function (value, index, values) {
                    return value + "%";
                  },
                },
              },
            ],
          },
          tooltips: {
            enabled: true,
            displayColors: false,
            titleFontSize: 8,
            bodyFontSize: 5,
            callbacks: {
              label: (tooltipItem, data) => {
                return `${tooltipItem.value}%`;
              },
            },
          },
          plugins: {
            datalabels: {
              anchor: "end",
              align: "top",
              font: {
                weight: 600,
                size: 10,
                color: "#323232",
              },
              padding: -2,
            },
          },
        }}
      />
    </div>
  );
};

export default GradeDistChart;
