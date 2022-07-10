import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import Cors from "./service/cors";

const cors = new Cors(process.env.REACT_APP_BASE_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App cors={cors} />
  </React.StrictMode>
);
