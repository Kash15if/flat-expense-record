import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

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

//data seggragating function to get values of objects in array as per chart.js data format
const indivdual = (lineVal, nameX) => {
  const arrData = [];

  Object.keys(lineVal).forEach(function (key) {
    const innerData = lineVal[key];
    arrData.push(innerData[nameX]);
    //console.log(nameX + " " + innerData[nameX]);
  });

  return arrData;
};

const LineChart = (props) => {
  //getting data from props
  const lineDataObj = props.LineChartData;

  //seggragating data for chart
  const date = Object.keys(lineDataObj);
  const kashifDataArray = indivdual(lineDataObj, "kashif");
  const azarulDataArray = indivdual(lineDataObj, "azarul");
  const sumData = kashifDataArray.map(function (item, idx) {
    return item + azarulDataArray[idx];
  });

  const data = {
    labels: date,
    datasets: [
      {
        label: "Kashif",
        data: kashifDataArray,
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255, 99, 132)",
      },
      {
        label: "Azarul",
        data: azarulDataArray,
        backgroundColor: "rgb(96,26,115)",
        borderColor: "rgb(96,26,115)",
      },
      {
        label: "Joint",
        data: sumData,
        backgroundColor: "rgb(0,184,141)",
        borderColor: "rgb(0,184,141)",
      },
    ],
  };
  return <Line data={data} options={options} height="400" />;
};

export default LineChart;
