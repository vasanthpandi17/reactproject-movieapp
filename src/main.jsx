import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WatchListContextProvider } from "./context/WatchListContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WatchListContextProvider>
      <App />
    </WatchListContextProvider>
  </React.StrictMode>
);