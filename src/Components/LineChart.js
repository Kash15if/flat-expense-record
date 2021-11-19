import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "Kashif",
      data: [120, 190, 30, 50, 20, 30],
    },
    {
      label: "Azarul",
      data: [120, 190, 30, 50, 20, 30],
    },

    {
      label: "Joint",
      data: [120, 190, 30, 50, 20, 30],
    },
  ],
};

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const LineChart = () => {
  return <Line data={data} options={options} height="400" />;
};

export default LineChart;
