import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-02.png";
import categoryImg03 from "../../../assets/images/category-03.png";
import categoryImg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },

  {
    display: "Appetizers",
    imgUrl: categoryImg01,
  },

  {
    display: "Drinks",
    imgUrl: categoryImg03,
  },

  {
    display: "Desserts",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <div className="container">
      <div className="row">
        {categoryData.map((item, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
