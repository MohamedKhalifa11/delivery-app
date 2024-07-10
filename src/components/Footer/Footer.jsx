import logo from "../../assets/images/brand.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Pizza Time!</h5>
              <p className="footer__title mt-4">24/7 Services</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <h5 className="footer__title">Contact</h5>
            <ul className="list-group deliver__time-list">
              <li className="list-group-item delivery__time-item border-0 ps-0">
                <p>Location: Cairo, Egypt</p>
              </li>
              <li className="list-group-item delivery__time-item border-0 ps-0">
                <span>Phone: +201123482136</span>
              </li>
              <li className="list-group-item delivery__time-item border-0 ps-0">
                <span>Email: mohamedkhalifadev@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-6">
            <p className="copyright__text">
              Copyright - 2024, Pizza Time! Website
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://github.com/MohamedKhalifa11/">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com/in/mohamed-khalifa11/">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
