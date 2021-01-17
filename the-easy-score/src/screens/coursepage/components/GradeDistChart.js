import React, { useState, useEffect, useRef } from "react";
import Chartjs from "chart.js";

const GradeDistChart = ({ average_grades }) => {
  const chartConfig = {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D"],
      datasets: [
        {
          label: "Grade Distribution",
          data: [
            average_grades[0],
            average_grades[1],
            average_grades[2],
            average_grades[3],
          ],
          backgroundColor: ["#9a0000", "#9a0000", "#9a0000", "#9a0000"],
          borderColor: ["#9a0000", "#9a0000", "#9a0000", "#9a0000"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      response: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
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
      {/* <Bar data={data} width={100} height={50} options={options} ref={barRef} /> */}
      <canvas ref={chartContainer} />
    </div>
  );
};

export default GradeDistChart;
