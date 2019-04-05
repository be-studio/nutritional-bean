import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import * as serviceWorker from "./serviceWorker";

import "./animate.css";
import "./index.css";
import "./styles.css";

import App from "./App";


/**
 * THE NUTRITIONAL BEAN
 * BE Web Application
 *
 * @author Birute M., Eric L.
 * @copyright 2019, BE
 * @see https://itsbe.studio
 * @version 1.x
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
