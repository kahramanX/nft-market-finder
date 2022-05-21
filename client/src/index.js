import React from "react";
import ReactDOM from "react-dom/client";

//Components
import App from "./App";

//Layouts
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const root = ReactDOM.createRoot(document.getElementById("I-LOVE-NFTS"));
root.render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
