import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "SiteInfos",
  initialState: {
    contract: "",
    tokenId: "",
    chain: "",
    themeMode: "",
    nftInfos: "",
    generalInfo: "",
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
    setNftInfos: (state, action) => {
      console.log(action.payload);
      state.nftInfos = action.payload;
    },
    setGeneralInfo: (state, action) => {
      console.log(action.payload);
      state.generalInfo = action.payload;
    },
  },
});

export const {
  setContract,
  setTokenId,
  setChain,
  setThemeMode,
  setNftInfos,
  setGeneralInfo,
} = site.actions;

export default site.reducer;
