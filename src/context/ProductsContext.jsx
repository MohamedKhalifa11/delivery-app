import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/MohamedKhalifa11/foods-api/main/foods.json"
      );
      const data = await response.json();
      setProducts(data.foods);
    };
    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

// Define PropTypes for ProductsProvider component
ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
