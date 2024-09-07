import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import "../../../styles/product-card.css";
import "../../../styles/product-loading.css";

const ProductCard = (props) => {
  // Destructure item properties from props
  const { id, name, image, price } = props.item;
  const [isImageLoading, setIsImageLoading] = useState(true); // Loading state for image
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle adding the item to the cart
  const addToCart = (e) => {
    e.stopPropagation(); // Prevent the default link behavior
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        price,
      })
    );
  };

  // Function to navigate to the food details page
  const handleCardClick = () => {
    navigate(`/menu/${id}`);
  };

  // Function to handle image load completion
  const handleImageLoad = () => {
    setIsImageLoading(false); // Hide loader once image has loaded
  };

  return (
    <div className="product__item" onClick={handleCardClick}>
      <div className="product__img">
        {isImageLoading && (
          <div className="lds-ring-container">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
        <img
          src={image}
          alt={name}
          onLoad={handleImageLoad} // Call function when the image loads
          className={` ${isImageLoading ? "image-hidden" : "card-food-images"}`}
        />
      </div>

      <div className="product__content">
        <h5>{name}</h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
