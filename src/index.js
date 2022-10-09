import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStateProvider } from "./context/GlobalContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStateProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </GlobalStateProvider>
    </Router>
  </React.StrictMode>
);
