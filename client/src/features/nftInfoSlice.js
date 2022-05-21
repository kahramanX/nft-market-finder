import { createSlice } from "@reduxjs/toolkit";

export const nftInfoSlice = createSlice({
  name: "NFTInputs",
  initialState: {
    contract: "1",
    tokenId: "1",
  },
  reducers: {
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokenId = action.payload;
    },
  },
});

export const { setContract, setTokenId } = nftInfoSlice.actions;

export default nftInfoSlice.reducer;
