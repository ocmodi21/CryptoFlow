import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CoinDataType {
  market_cap_rank: number;
  image: string;
  symbol: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  ath: number;
  market_cap: number;
}

const initialState: CoinDataType[] = [];

export const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    setCoinData: (state, action: PayloadAction<CoinDataType[]>) => {
      return [...state, ...action.payload];
    },
  },
});

export const { setCoinData } = coinSlice.actions;

export default coinSlice.reducer;
