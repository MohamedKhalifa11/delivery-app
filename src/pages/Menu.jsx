import { useState, useContext, lazy, Suspense } from "react";
import Helmet from "../components/Helmet/Helmet";
// import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import { ProductsContext } from "../context/ProductsContext";
import "../styles/menu.css";
import "../styles/product-loading.css";
import "../styles/pagination.css";

const Menu = () => {
  const ProductCard = lazy(() =>
    import("../components/UI/product-card/ProductCard.jsx")
  );
  const products = useContext(ProductsContext); // Fetch products from context
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortOption, setSortOption] = useState("default");

  // Function to handle sorting of products based on selected option
  const handleSort = (products, option) => {
    switch (option) {
      case "ascending": // From A to Z
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "descending": // From Z to A
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case "high-price": // From Highest price to Lowest
        return products.sort((a, b) => b.price - a.price);
      case "low-price": // From Lowest price to Highest
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  // // Filter products based on search term
  // const searchedProduct = products.filter((item) => {
  //   if (searchTerm === "") {
  //     return item;
  //   }
  //   if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return item;
  //   } else {
  //     return null;
  //   }
  // });

  // // Sort products based on selected sort option
  // const sortedProducts = handleSort([...searchedProduct], sortOption);

  // Filter products based on search term
  const searchedProduct = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on selected sort option
  const sortedProducts = handleSort(searchedProduct, sortOption);

  // Pagination logic
  const productPerPage = 12; // Number of products per page
  const visitedPage = pageNumber * productPerPage;
  const displayPage = sortedProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  // Calculate total page count
  const pageCount = Math.ceil(sortedProducts.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Menu">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
              <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  className="form-control"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </div>

            {displayPage.map((item) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
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

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
                previousClassName={pageNumber === 0 ? "disabled" : ""}
                nextClassName={pageNumber === pageCount - 1 ? "disabled" : ""}
                disabledClassName="disabled"
                activeClassName="active"
              />
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Menu;
