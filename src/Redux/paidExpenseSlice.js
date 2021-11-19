import { createSlice } from "@reduxjs/toolkit";
import { fetchUserById } from "./actions";
const initialState = {
  value: [],
};

export const paidData = createSlice({
  name: "paid",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      //console.log(action.payload);
      state.value = action.payload;
    },
    [fetchUserById.pending]: (state, action) => {
      // Add user to the state array
      //console.log(action.payload);
      state.value = "Loading";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { fetchUserById } = paidData.actions;

export default paidData.reducer;

//export const fetchUserById = fetchUserById;
