import { createSlice } from "@reduxjs/toolkit";

export const nftInfoSlice = createSlice({
  name: "NFTInputs",
  initialState: {
    contract: "",
    tokenId: "",
    networkName: "",
  },
  reducers: {
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokenId = action.payload;
    },
    setNetworkName: (state, action) => {
      state.networkName = action.payload;
    },
  },
});

export const { setContract, setTokenId, setNetworkName } = nftInfoSlice.actions;

export default nftInfoSlice.reducer;
