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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO1wru6GvauF0ZHNafFWke_TV_B6W87Mk",
  authDomain: "project-1-fb684.firebaseapp.com",
  projectId: "project-1-fb684",
  storageBucket: "project-1-fb684.appspot.com",
  messagingSenderId: "189523530914",
  appId: "1:189523530914:web:f7895bd2e14abd1ad9b3fb",
  measurementId: "G-K3GD8VMFM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
