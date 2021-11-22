import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { getAllData } from "./Redux/actions";
//import { fetchUserById } from "./Redux/actions";

import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Member from "./Pages/Members";
import { Button } from "@mui/material";
function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.paid);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  console.log(data.value);
  console.log(data.lineData);
  console.log(data.pieData);

  return (
    <div className="App">
      {/* <div>{data.id}</div> */}
      {data.value !== "loading" && (
        <Home
          pieChartData={data.pieData}
          lineChartData={data.lineData}
          tableData={data.value}
        />
      )}
    </div>
  );
}

export default App;
