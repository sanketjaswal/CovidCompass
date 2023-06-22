import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stats from "./Components/stats";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" Component={App}></Route>
        <Route path="/Stats" Component={Stats}></Route>

        {/* <App /> */}
        {/* <Navigate to="/" /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
