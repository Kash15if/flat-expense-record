import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchUserById } from "./Redux/actions";
//import { fetchUserById } from "./Redux/actions";

import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Member from "./Pages/Members";
import { Button } from "@mui/material";
function App() {
  const dispatch = useDispatch();
  //dispatch(fetchUserById);

  const data = useSelector((state) => state.paid.value);
  console.log(data[0]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    dispatch(fetchUserById);
    //console.log(data);
  }, []);
  return (
    <div className="App">
      {/* <div>{data.id}</div> */}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <Button onClick={() => dispatch(fetchUserById())}>abcdf</Button>
        </div>
      )}
      {/* <Member /> */}
    </div>
  );
}

export default App;
