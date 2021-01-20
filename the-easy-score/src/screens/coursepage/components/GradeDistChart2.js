import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const initialChartData = {
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      label: "Grades",
      data: [25, 10, 15, 8],
      backgroundColor: [
        "#b32727",
        "#b32727",
        "#b32727",
        "#b32727",
      ],
    },
  ],
};

const GradeDistChart2 = ({ average_grades }) => {
  const [data, setData] = useState(initialChartData);

  useEffect(() => {
    console.log("yo!");
    setData({
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
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
    });
  }, [average_grades]);

  return (
    <div>
      <Bar
        data={data}
        width={240}
        height={200}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Grade Distribution",
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                ticks: { display: true },
                gridLines: {
                  display: false,
                  drawBorder: true,
                },
                // barThickness: 30,
                barPercentage: 0.4,
                categoryPercentage: 1,
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: true,
                  // fontColor: ,
                  // fontFamily: ,
                  // fontSize: ,
                  // zeroLineColor: "#914949",
                  fontSize: 6,
                  // min: 0,
                  // max: 4,
                  stepSize: 20,
                  min: 5,
                  // suggestedMin: 5,
                  suggestedMax: 5,
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
          tooltips: {
            enabled: true,
            displayColors: false,
            titleFontSize: 8,
            bodyFontSize: 8,
            callbacks: {
              label: (tooltipItem, data) => {
                return `${tooltipItem.value}%`;
              },
            },
          },
        }}
      />
    </div>
  );
};

export default GradeDistChart2;
