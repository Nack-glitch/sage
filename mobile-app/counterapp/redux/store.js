import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "./slice";

const store= configureStore({
  reducer:{
    counter: countersReducer,
  }
})
export default store;