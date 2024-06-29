// import { useState } from "react";
// import Helmet from "../components/Helmet/Helmet";
// // import CommonSection from "../components/UI/common-section/CommonSection";

// import products from "../assets/fake-data/products";
// import ProductCard from "../components/UI/product-card/ProductCard";
// import ReactPaginate from "react-paginate";

// import "../styles/menu.css";
// import "../styles/pagination.css";

// const Menu = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [pageNumber, setPageNumber] = useState(0);

//   const searchedProduct = products.filter((item) => {
//     if (searchTerm === "") {
//       return item;
//     }
//     if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return item;
//     } else {
//       return null;
//     }
//   });

//   const productPerPage = 12;
//   const visitedPage = pageNumber * productPerPage;
//   const displayPage = searchedProduct.slice(
//     visitedPage,
//     visitedPage + productPerPage
//   );

//   const pageCount = Math.ceil(searchedProduct.length / productPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <Helmet title="Menu">
//       {/* <CommonSection title="Menu Page" /> */}
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
//               <div className="search__widget d-flex align-items-center justify-content-between">
//                 <input
//                   type="text"
//                   placeholder="I'm looking for...."
//                   className="form-control"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
//               <div className="sorting__widget text-end">
//                 <select className="w-50">
//                   <option>Default</option>
//                   <option value="ascending">Alphabetically, A-Z</option>
//                   <option value="descending">Alphabetically, Z-A</option>
//                   <option value="high-price">High Price</option>
//                   <option value="low-price">Low Price</option>
//                 </select>
//               </div>
//             </div>

//             {displayPage.map((item) => (
//               <div
//                 className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
//                 key={item.id}
//               >
//                 <ProductCard item={item} />
//               </div>
//             ))}

//             <div>
//               <ReactPaginate
//                 pageCount={pageCount}
//                 onPageChange={changePage}
//                 previousLabel={"Prev"}
//                 nextLabel={"Next"}
//                 containerClassName="paginationBttns"
//                 previousClassName={pageNumber === 0 ? "disabled" : ""}
//                 nextClassName={pageNumber === pageCount - 1 ? "disabled" : ""}
//                 disabledClassName="disabled"
//                 activeClassName="active"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </Helmet>
//   );
// };

// export default Menu;

// import { useState, useEffect } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import ProductCard from "../components/UI/product-card/ProductCard";
// import ReactPaginate from "react-paginate";

// import "../styles/menu.css";
// import "../styles/pagination.css";

// const Menu = () => {
//   const [products, setProducts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [pageNumber, setPageNumber] = useState(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch(
//         "https://raw.githubusercontent.com/MohamedKhalifa11/foods-api/main/foods.json"
//       );
//       const data = await response.json();
//       setProducts(data.foods);
//     };
//     fetchProducts();
//   }, []);

//   const searchedProduct = products.filter((item) => {
//     if (searchTerm === "") {
//       return item;
//     }
//     if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//       return item;
//     } else {
//       return null;
//     }
//   });

//   const productPerPage = 12;
//   const visitedPage = pageNumber * productPerPage;
//   const displayPage = searchedProduct.slice(
//     visitedPage,
//     visitedPage + productPerPage
//   );

//   const pageCount = Math.ceil(searchedProduct.length / productPerPage);

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };

//   return (
//     <Helmet title="Menu">
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
//               <div className="search__widget d-flex align-items-center justify-content-between">
//                 <input
//                   type="text"
//                   placeholder="I'm looking for...."
//                   className="form-control"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <span>
//                   <i className="ri-search-line"></i>
//                 </span>
//               </div>
//             </div>
//             <div className="col-lg-6 col-md-6 col-sm-6 col-12 mb-5">
//               <div className="sorting__widget text-end">
//                 <select className="w-50">
//                   <option>Default</option>
//                   <option value="ascending">Alphabetically, A-Z</option>
//                   <option value="descending">Alphabetically, Z-A</option>
//                   <option value="high-price">High Price</option>
//                   <option value="low-price">Low Price</option>
//                 </select>
//               </div>
//             </div>

//             {displayPage.map((item) => (
//               <div
//                 className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
//                 key={item.id}
//               >
//                 <ProductCard item={item} />
//               </div>
//             ))}

//             <div>
//               <ReactPaginate
//                 pageCount={pageCount}
//                 onPageChange={changePage}
//                 previousLabel={"Prev"}
//                 nextLabel={"Next"}
//                 containerClassName="paginationBttns"
//                 previousClassName={pageNumber === 0 ? "disabled" : ""}
//                 nextClassName={pageNumber === pageCount - 1 ? "disabled" : ""}
//                 disabledClassName="disabled"
//                 activeClassName="active"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </Helmet>
//   );
// };

// export default Menu;

import { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/menu.css";
import "../styles/pagination.css";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/MohamedKhalifa11/foods-api/main/foods.json"
      );
      const data = await response.json();
      setProducts(data.foods);
    };
    fetchProducts();
  }, []);

  const handleSort = (products, option) => {
    switch (option) {
      case "ascending":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "descending":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case "high-price":
        return products.sort((a, b) => b.price - a.price);
      case "low-price":
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  const searchedProduct = products.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return null;
    }
  });

  const sortedProducts = handleSort([...searchedProduct], sortOption);

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = sortedProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

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
                <ProductCard item={item} />
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
