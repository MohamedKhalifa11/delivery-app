import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { ProductsProvider } from "./context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
