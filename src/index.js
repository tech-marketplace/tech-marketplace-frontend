import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sassfiles/styles.min.css";
import "./sassfiles/styles.css";

//Provider
import store from "./features/store";
import { Provider } from "react-redux";
import { productsFetch } from "./features/productsSlice";
import { getTotals } from "./features/cartSlice";
import { loadUser } from "./features/authSlice";

store.dispatch(productsFetch());
store.dispatch(getTotals());
store.dispatch(loadUser(null));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
