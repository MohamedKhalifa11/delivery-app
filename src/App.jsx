import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import CartDrawer from "./components/UI/cart/CartDrawer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Routers from "./routes/Routers";

function App() {
  // Use useSelector to access the cart drawer state from the Redux store
  const showCart = useSelector((state) => state.cartDrawer.cartIsVisible);
  return (
    <div>
      <Header />

      {/* If showCart is true show CartDrawer */}
      {showCart && <CartDrawer />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
