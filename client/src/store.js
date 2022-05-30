import { configureStore } from "@reduxjs/toolkit";
import site from "./features/site";

export default configureStore({
  reducer: {
    site: site,
  },
});
