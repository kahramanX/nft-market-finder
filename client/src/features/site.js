import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "SiteInfos",
  initialState: {
    contract: "",
    tokenId: "",
    chain: "",
    themeMode: "",
    dataFromMarket: "",
  },
  reducers: {
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokenId = action.payload;
    },
    setChain: (state, action) => {
      state.chain = action.payload;
    },
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
    setDataFromMarket: (state, action) => {
      console.log(action.payload);
      state.dataFromMarket = action.payload;
    },
  },
});

export const {
  setContract,
  setTokenId,
  setChain,
  setThemeMode,
  setDataFromMarket,
} = site.actions;

export default site.reducer;
