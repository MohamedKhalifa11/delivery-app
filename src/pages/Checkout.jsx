import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Helmet from "../components/Helmet/Helmet";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";

import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../store/shopping-cart/cartSlice";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  // Retrieve cart total amount from the Redux store
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 5; // Fixed shipping cost

  // Calculate total amount including shipping cost
  const totalAmount = cartTotalAmount + Number(shippingCost);

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      // Payment succeeded, process the payment and store shipping info.
      console.log("Payment successful", paymentMethod);
      Swal.fire({
        // title: "Payment Successful!",
        html: `
        <h2 style="color: #53392E;">Thank you for your payment!</h2>
        <p>Your payment was processed successfully.</p>
        <span style= "color: #F8983D;">Your food will arrive in 40 minutes!</span>
        `,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#F8983D",
      }).then(() => {
        dispatch(cartActions.clearCart());
        navigate("/menu");
      });
    } else {
      console.error("Payment failed", error);
      // Show SweetAlert on payment failure
      Swal.fire({
        // title: "Payment Failed",
        html: `<h2 style="color: #53392E;">Payment Failed.</h2>
        <span>There was an issue with your payment: ${error.message}</span>`,
        // text: `There was an issue with your payment: ${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#F8983D",
      });
    }

    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      {/* Set the page title to "Checkout" */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <h6 className="my-3">Payment Details</h6>
                <div className="form__group mb-3">
                  <CardElement />
                </div>
                <button type="submit" className="btn btn-primary">
                  Pay Now
                </button>
              </form>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Checkout;
