import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./slice/CoinDataSlice";

export const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});
