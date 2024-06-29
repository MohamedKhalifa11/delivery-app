import "../../../styles/product-card.css";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, name, image, price } = props.item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleCardClick = () => {
    navigate(`/menu/${id}`);
  };

  return (
    <div className="product__item" onClick={handleCardClick}>
      <div className="product__img">
        <img src={image} alt={name} className="w-50" />
      </div>

      <div className="product__content">
        <h5>{name}</h5>
        <div className=" d-flex align-items-center justify-content-between ">
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
