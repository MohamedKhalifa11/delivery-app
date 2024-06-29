import { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Signup">
      {/* <CommonSection title="Signup" /> */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group mb-3">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                    className="form-control"
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                    className="form-control"
                  />
                </div>
                <div className="form__group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Register;
