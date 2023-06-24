import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const BarChart = ({ timesheets }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const labels = timesheets.map(
      (timesheet) => `Date ${timesheet.start_date}`
    );
    const data = timesheets.map((timesheet) => timesheet.hours);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "Hours",
          data: data,
          backgroundColor: "rgba(54, 255, 40, 0.5)",
          borderColor: "rgba(54, 255, 40, 1)",
          borderWidth: 1,
        },
      ],
    };

    chartInstanceRef.current = new Chart(chartCanvas, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [timesheets]);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={300} />
    </div>
  );
};

export default BarChart;
