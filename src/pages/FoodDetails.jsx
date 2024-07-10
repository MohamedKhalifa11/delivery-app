import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { ProductsContext } from "../context/ProductsContext";
import "../styles/food-details.css";
import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {
  const { id } = useParams();
  const products = useContext(ProductsContext); // Get the fetched foods from context
  const dispatch = useDispatch(); // Initialize the dispatch function
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [tab, setTab] = useState("desc"); // State for the active tab (description or review)
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [reviewMsg, setReviewMsg] = useState("");

  useEffect(() => {
    // Find the selected food based on ID from URL params
    const product = products.find((product) => product.id === Number(id));
    setProduct(product);
    if (product) {
      // Find related foods excluding the current food
      setRelatedProducts(
        products.filter(
          (item) => item.category === product.category && item.id !== Number(id)
        )
      );
    }
  }, [id, products]);

  // Scroll to top of the page when the food details are updated or refreshed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  // Handler for adding the product to the cart
  const addItem = () => {
    if (product) {
      dispatch(
        cartActions.addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
        })
      );
    }
  };

  // Handler for form submission to submit the review
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(enteredName, enteredEmail, reviewMsg);
  // };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Helmet title="food-details">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__main-img">
                <img
                  src={product.image}
                  alt={product.name}
                  className="food-image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.name}</h2>
                <p className="product__price">
                  Price: <span>${product.price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{product.category}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6
                  className={` ${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={` ${tab === "review" ? "tab__active" : ""}`}
                  onClick={() => setTab("review")}
                >
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{product.desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  <div className="review pt-5">
                    <p className="user__name mb-0">John Doe</p>
                    <p className="user__email">johndoe@example.com</p>
                    <p className="feedback__text">
                      Great food! Highly recommend.
                    </p>
                  </div>

                  {/* <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={enteredEmail}
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <textarea
                        rows="5"
                        placeholder="Write your review"
                        value={reviewMsg}
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="addTOCart__btn">
                      Submit
                    </button>
                  </form> */}
                </div>
              )}
            </div>

            <div className="col-lg-12 mt-5">
              <h2 className="related__title">You might also like</h2>
            </div>

            {relatedProducts.map((item) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                key={item.id}
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
