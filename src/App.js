import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { getAllData } from "./Redux/actions";
import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Member from "./Pages/Members";
import AdminPage from "./Admin/ManageExpense";
import { darkTheme } from "./Theme.js";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.paid);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <HideOnScroll>
          <AppBar>
            <Toolbar>
              <Typography variant="h6" component="div">
                Flat Expense Record
              </Typography>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
