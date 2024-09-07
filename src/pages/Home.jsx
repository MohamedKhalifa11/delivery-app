import { useState, useEffect, useContext, Suspense, lazy } from "react";
import Helmet from "../components/Helmet/Helmet.jsx";
import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";
// import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/Delivery-amico.svg";
import networkImg from "../assets/images/Online Review-pana.svg";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import { ProductsContext } from "../context/ProductsContext.jsx";

import "../styles/home.css";
import "../styles/hero-section.css";
import "../styles/product-loading.css";
// Array data for feature section
const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Get your pizza cravings satisfied in a flash! Hot and fresh pizzas straight to your door.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Make memories with friends and family. Enjoy a cozy atmosphere, and delicious pizzas.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Order online and skip the wait. Your pizza will be ready for pick-up in minutes.",
  },
];

const Home = () => {
  const products = useContext(ProductsContext); // Context for Foods data
  const [hotPizza, setHotPizza] = useState([]);
  // const [loading, setLoading] = useState(true);

  const ProductCard = lazy(() =>
    import("../components/UI/product-card/ProductCard.jsx")
  );

  useEffect(() => {
    // if (products.length > 0) {
    //   setLoading(false);
    // }

    // Filter and slice products to get the top 4 pizzas
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [products]);

  return (
    <Helmet title="Home">
      {/* Set the page title to "Home" */}
      {/* Hero Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="hero__content">
                <h5 className="mb-3">Welcome in Pizza Time!</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Order delicious pizzas online and get them delivered hot and
                  fresh to your doorstep in minutes!
                </p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    <Link to="/menu">View Menu</Link>
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/blogs">Read Blogs</Link>
                  </button>
                </div>
                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100 spin" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="pt-0">
        <Category />
      </section>

      {/* Feature Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Treat yourself to</h2>
              <h2 className="feature__title">
                a delicious pizza <span>any time!</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Pizza Time provides services across all cities - various foods
                and drinks, you choose!
              </p>
              <p className="feature__text">
                What makes us special is our teams of professionals with
                extensive knowledge of all cuisine that we have to offer.
              </p>
            </div>
            {featureData.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 mt-5" key={index}>
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pizza Time! Section */}
      <section className="why__choose-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Pizza Time!?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Experience the culinary delight that is Pizza Time! We are
                  passionate about crafting pizzas that tantalize your taste
                  buds and leave you craving more.
                </p>

                <ul className="list-group why-pizza mt-4">
                  <li className="list-group-item border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and
                      tasty Pizza
                    </p>
                    <p className="choose__us-desc">
                      We use only the finest ingredients, from our hand-tossed
                      dough to our locally sourced toppings, to create pizzas
                      that are bursting with flavor.
                    </p>
                  </li>

                  <li className="list-group-item border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Exceptional
                      Customer Service
                    </p>
                    <p className="choose__us-desc">
                      Our team is dedicated to providing you with an exceptional
                      dining experience. We are always here to answer your
                      questions and make sure you are satisfied.
                    </p>
                  </li>

                  <li className="list-group-item border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose__us-desc">
                      Order your pizza online, over the phone, or in-store for
                      pickup or delivery. We are always ready to serve you!
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Hot Pizza Section */}
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2>Hot Pizza</h2>
            </div>
            {/* {loading ? (
              <div>Loading...</div>
            ) : ( */}
            {hotPizza.map((item) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xs-6"
                key={item.id}
              >
                <Suspense
                  fallback={
                    <div className="lds-ring-container">
                      <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  }
                >
                  <ProductCard item={item} />
                </Suspense>
              </div>
            ))}
            {/* )} */}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>

                <TestimonialSlider />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
