import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

const data = {
  labels: ["Kashif", "Azarul"],
  datasets: [
    {
      label: "Amount paid by members",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132)", "rgb(75, 192, 192)"],
    },
  ],
};

const PieChart = () => {
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
          },
        },
      }}
    />
  );
};

export default PieChart;
