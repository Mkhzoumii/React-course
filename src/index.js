import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header.jsx";
import store from '../src/app/redux/Store.js'
import { Provider } from "react-redux";
import Counter from '../src/app/component/Counter.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Counter/>
    </Provider>
  </React.StrictMode>
);
