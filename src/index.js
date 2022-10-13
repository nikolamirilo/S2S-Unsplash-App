import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { ImagesContextProvider } from "./context/ImagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStateProvider>
      <ThemeContextProvider>
        <ImagesContextProvider>
          <App />
        </ImagesContextProvider>
      </ThemeContextProvider>
    </GlobalStateProvider>
  </Router>
);
