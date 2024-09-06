import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import { ProductsProvider } from "./context/ProductsContext";
import { loadStripe } from "@stripe/stripe-js";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "./index.css";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51PvgiDRqaDwSPKWRRpIY2MNqo3l5CPxCQqXYFBe2QSePMEdYs7RBulIGhB1B2PeVg5N1SjMO9y9OTo4bhdeio7cY00lJa9TRpo"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ProductsProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </ProductsProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
