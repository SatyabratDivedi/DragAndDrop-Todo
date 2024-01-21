import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer.js";

export const store = configureStore({
  reducer: {
    todoReducer: todoReducer,
  },
});
