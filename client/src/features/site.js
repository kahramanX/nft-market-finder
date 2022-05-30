import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "SiteInfos",
  initialState: {
    contractRedux: "",
    tokenIdRedux: "",
    chainRedux: "",
    themeMode: "",
    nftInfos: "",
    generalInfo: "",
  },
  reducers: {
    setContract: (state, action) => {
      state.contractRedux = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokenIdRedux = action.payload;
    },
    setChain: (state, action) => {
      state.chainRedux = action.payload;
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
