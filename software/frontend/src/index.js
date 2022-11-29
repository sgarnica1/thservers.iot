import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GeneralProvider } from "./context/GeneralContext";
import "./scss/config.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>
);
