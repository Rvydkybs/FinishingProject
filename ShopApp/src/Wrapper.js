import Router from "./Router";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./Context/AuthProvider/Reducers";

export default () => {
  const store = createStore(Reducers);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
