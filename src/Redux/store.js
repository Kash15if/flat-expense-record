import { configureStore } from "@reduxjs/toolkit";
import paidExpenses from "./paidExpenseSlice";

export const store = configureStore({
  reducer: {
    paid: paidExpenses,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
