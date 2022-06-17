import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/basicComponents/Navbar";
import Footer from "../components/basicComponents/Footer";
import { login } from "../redux/auth/authAction";
import { setLogin } from "../services.js/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   if (error) {
  //     toast.error(error);
  //   } else {
  //     dispatch(login(email, password));
  //     history.push("/");
  //   }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await setLogin({ email, password });
    if (response.error) {
      toast.error(response.message);
    } else {
      const { user, token } = response.data;
      dispatch(login(user, token));
      localStorage.setItem("auth", JSON.stringify({ user, token }));
      history.push("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-content page-auth">
        <div className="section-store-auth" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center row-login">
              <div className="col-lg-6 text-center">
                <img
                  src="/images/login-frame.png"
                  alt=""
                  className="w-50 mb-4 mb-lg-none"
                />
              </div>
              <div className="col-lg-5">
                <h2>
                  Login aja <br /> kalo laper
                </h2>
                <form action="" className="mt-3">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control w-75"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control w-75"
                      name="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={submitHandler}
                    className="btn btn-success w-75 mt-4"
                  >
                    Sign In to My Account
                  </button>
                  <Link to="/register" className="btn btn-signup w-75 mt-2">
                    Daftar Sekarang
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose={5000} />
    </>
  );
};

export default LoginPage;
