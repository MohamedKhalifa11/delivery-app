import "../../styles/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import PropTypes from "prop-types";

const CartItem = ({ item, layout }) => {
  const { id, name, price, image, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  // Increment the quantity of the item
  const incrementItem = () => {
    dispatch(cartActions.addItem({ id, name, price, image }));
  };

  // Decrement the quantity of the item
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  // Delete the item from the cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  // Render the item based on the layout type
  return layout === "drawer" ? (
    // Drawer layout
    <div className="border-0 cart__item list-group-item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{name}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </div>
  ) : (
    // Table layout
    <tr>
      <td className="text-center cart__img-box">
        <img src={image} alt="" />
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

// Define PropTypes for CartItem component
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  layout: PropTypes.string.isRequired,
};

export default CartItem;
