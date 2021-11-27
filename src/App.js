import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { getAllData } from "./Redux/actions";
//import { fetchUserById } from "./Redux/actions";

import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Member from "./Pages/Members";
import AdminPage from "./Admin/ManageExpense";

import { Button } from "@mui/material";
function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.paid);

  useEffect(() => {
    dispatch(getAllData());
    console.log(data.value);
  }, [dispatch]);

  //console.log(data.value);
  //console.log(data.lineData);
  // console.log(data.pieData);

  return (
    <div className="App">
      {/* <div>{data.id}</div> */}
      {data.value !== "Loading" && (
        <Home
          pieChartData={data.pieData}
          lineChartData={data.lineData}
          tableData={data.value}
        />
        /* <AdminPage /> */
      )}
    </div>
  );
}

export default App;
