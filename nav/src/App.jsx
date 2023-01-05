import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import { StoreProvider } from "store/store";

import "./index.scss";

const App = () => (
  <StoreProvider>
    <div>
      <Header />
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
