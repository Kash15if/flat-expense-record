import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from "./extraFunctions";
import { getAllData } from "./actions";
const initialState = {
  value: [],
  lineData: [],
  pieData: {
    kashif: 0,
    azarul: 0,
  },
};

export const paidData = createSlice({
  name: "paid",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllData.fulfilled]: (state, action) => {
      const { lineChartDaata, pieActual } = getChartData(action.payload);
      state.lineData = lineChartDaata;
      state.pieData = pieActual;
      state.value = action.payload;
    },
    [getAllData.pending]: (state, action) => {
      state.value = "Loading";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { fetchUserById } = paidData.actions;

export default paidData.reducer;
//export const fetchUserById = fetchUserById;
