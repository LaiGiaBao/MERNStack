console.log(
  "This file is used to bootstrap the entire react application in html root!!"
);

import React from "react"; // default import
import * as ReactDOM from "react-dom/client"; // importing all modules
import { RouterComponent } from "./app/app"; //react application
import { Provider } from "react-redux";
import store from "./app/State/store";
// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// // Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";
//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterComponent />
  </Provider>
);
