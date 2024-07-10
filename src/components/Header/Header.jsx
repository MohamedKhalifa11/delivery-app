import { useRef, useEffect } from "react";
import logo from "../../assets/images/brand.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartDrawerActions } from "../../store/shopping-cart/cartDrawerSlice";
import "../../styles/header.css";

// Navigation links for the header
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Menu",
    path: "/menu",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "Blogs",
    path: "/blogs",
  },
];

const Header = () => {
  // Refs for the menu and header
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // Selectors and dispatch
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  // Toggle menu visibility
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  // Toggle cart drawer visibility (Open Cart drawer)
  const toggleCart = () => {
    dispatch(cartDrawerActions.toggle());
  };

  // Handle scroll to add/remove class for header shrink effect
  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  // Add scroll event listener on component mount and remove on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Pizza Time!</h5>
          </div>

          {/* Navigation menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Nav right side icons */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
