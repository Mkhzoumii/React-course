import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/layout/Header.jsx";
import store from "../src/app/redux/Store.js";
import { Provider } from "react-redux";
import Counter from "../src/app/component/Counter.jsx";
import DestinationList from "./app/component/DestinationList.jsx";
import DestinationFact from "../src/app/component/DestinationFact.jsx";
import ResetApp from "../src/app/component/ResetApp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <div className="p-4 border text-center">
        <h4 className="text-success"> Destination List</h4>
        <DestinationList />
        <DestinationFact />
      </div>
    </Provider>
  </React.StrictMode>
);
