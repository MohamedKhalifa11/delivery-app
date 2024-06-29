import { useState } from "react";
import { useSelector } from "react-redux";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 5;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
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
      {/* <CommonSection title="Checkout" /> */}
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
                <button type="submit" className="btn btn-primary">
                  Payment
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
