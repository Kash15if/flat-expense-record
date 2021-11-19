import { createAsyncThunk } from "@reduxjs/toolkit";

// First, create the thunk
export const fetchUserById = createAsyncThunk("fetchByI", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = response.json();
  //console.log(res);
  return res;
});
