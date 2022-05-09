import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Scores from "./Scores";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/scores" element={<Scores />} />
    </Routes>
  </BrowserRouter>
);
