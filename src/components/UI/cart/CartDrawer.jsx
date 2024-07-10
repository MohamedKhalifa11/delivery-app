import { Link } from "react-router-dom";
import CartItem from "../../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartDrawerActions } from "../../../store/shopping-cart/cartDrawerSlice";
import "../../../styles/cart-drawer.css";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // Function to toggle the cart drawer visibility (Close Cart Drawer)
  const toggleCart = () => {
    dispatch(cartDrawerActions.toggle());
  };

  return (
    <div className="cart__container">
      <div className="cart list-group">
        {/* Close button for the cart drawer */}
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} layout="drawer" />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>
          <button>
            {/* When click on checkout button close cart drawer */}
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
