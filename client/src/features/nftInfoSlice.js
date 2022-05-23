import { createSlice } from "@reduxjs/toolkit";

export const nftInfoSlice = createSlice({
  name: "NFTInputs",
  initialState: {
    contract: "",
    tokenId: "",
    chain: "",
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
  },
});

export const { setContract, setTokenId, setChain } = nftInfoSlice.actions;

export default nftInfoSlice.reducer;
