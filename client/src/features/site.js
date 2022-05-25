import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "SiteInfos",
  initialState: {
    contract: "",
    tokenId: "",
    chain: "",
    themeMode: "",
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
      console.log(action.payload);
      state.themeMode = action.payload;
    },
  },
});

export const { setContract, setTokenId, setChain, setThemeMode } = site.actions;

export default site.reducer;
