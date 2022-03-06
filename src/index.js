import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CleanUp from "./CleanUp";
import CoinTracker from "./CoinTracker";
import Movies from "./Movies";
import Todo from "./Todo";

ReactDOM.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>,
  document.getElementById("root")
);
