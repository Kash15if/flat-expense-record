import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

const PieChart = (props) => {
  console.log(props.PieChartData);
  const data = {
    labels: ["Kashif", "Azarul"],
    datasets: [
      {
        label: "Amount paid by members",
        data: [props.PieChartData.kashif, props.PieChartData.azarul],
        backgroundColor: ["rgb(75, 192, 192)", "rgba(255, 99, 132)"],
      },
    ],
  };

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
