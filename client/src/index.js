import React from "react";
import ReactDOM from "react-dom/client";

//Redux
import store from "./store";
import { Provider } from "react-redux";

//Components
import App from "./App";

//Layouts
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const root = ReactDOM.createRoot(document.getElementById("I-LOVE-NFTS"));

root.render(
  <>
    <Provider store={store}>
      <Header />
      <App />
      <Footer />
    </Provider>
  </>
);
