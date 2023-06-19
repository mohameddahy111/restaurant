import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataSroreProvider } from "./context/DataStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataSroreProvider>
      <App />
    </DataSroreProvider>
  </React.StrictMode>
);

