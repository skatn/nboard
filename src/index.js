import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> 해당 코드 추가돼있으면 두번 실행됨
  <App />
  // </React.StrictMode>
);
