import { configureStore } from "@reduxjs/toolkit";
import nftInfoSlice from "./features/nftInfoSlice";

export default configureStore({
  reducer: {
    nftInfos: nftInfoSlice,
  },
});
