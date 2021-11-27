import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { getAllData } from "./Redux/actions";
//import { fetchUserById } from "./Redux/actions";

import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Member from "./Pages/Members";
import AdminPage from "./Admin/ManageExpense";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.paid);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  //console.log(data.value);
  //console.log(data.lineData);
  // console.log(data.pieData);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              data.value !== "Loading" && (
                <Home
                  pieChartData={data.pieData}
                  lineChartData={data.lineData}
                  tableData={data.value}
                />
                /* <AdminPage /> */
              )
            }
          />

          <Route
            path="/admin/add/login"
            element={data.value !== "Loading" && <AdminPage />}
          />

          <Route
            path="/kashif"
            element={
              data.value !== "Loading" && (
                <Member
                  name="kashif"
                  pieChartData={data.pieData}
                  lineChartData={data.lineData}
                  tableData={data.value}
                />
              )
            }
          />

          <Route
            path="/azarul"
            element={
              data.value !== "Loading" && (
                <Member
                  name="azarul"
                  pieChartData={data.pieData}
                  lineChartData={data.lineData}
                  tableData={data.value}
                />
                /* <AdminPage /> */
              )
            }
          />
        </Routes>
      </Router>

      {/* <div>{data.id}</div> */}
      {/* <AdminPage /> */}
    </div>
  );
}

export default App;
