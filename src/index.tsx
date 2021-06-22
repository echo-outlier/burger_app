import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import burger_reducer from "./Store/reducers/burger";
import checkout_reducer from "./Store/reducers/checkout";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import auth_reducer from "./Store/reducers/auth";

const logger = (store: any) => {
  return (next: any) => {
    return (action: any) => {
      console.log("[Middleware]", action);
      const result = next(action);
      console.log("[Middleware]", store.getState());
      return result;
    };
  };
};

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root_reducer = combineReducers({
  burger: burger_reducer,
  checkout: checkout_reducer,
  auth: auth_reducer,
});

//@ts-ignore
const store = createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Router basename="burger_app">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
