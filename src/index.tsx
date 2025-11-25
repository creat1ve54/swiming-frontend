import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Programms from "./app/pages/Programms";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
