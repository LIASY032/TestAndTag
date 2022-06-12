import React from "react";
import "./index.css";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);
