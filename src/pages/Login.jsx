import { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Login">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                    className="form-control"
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don&apos;t have an account? Create an account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
