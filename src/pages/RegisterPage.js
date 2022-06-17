import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/basicComponents/Footer";
import Navbar from "../components/basicComponents/Navbar";
import { setSignUp } from "../services.js/auth";
// import Alert from "../components/basicComponents/Alert";
// import { register } from "../redux/auth/authAction";
// import Spinner from "../components/basicComponents/Spinner";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // const dispatch = useDispatch();
  // const userRegister = useSelector((state) => state.userRegister);
  // const { error } = userRegister;

  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    // if (
    //   name === "" ||
    //   email === "" ||
    //   password === "" ||
    //   passwordConfirm === ""
    // ) {
    //   return toast.error("please fill in all data");
    // }

    if (password !== passwordConfirm) {
      return toast.error("Password do not match");
    }

    const response = await setSignUp({
      name,
      email,
      password,
      passwordConfirm,
    });
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Successful Registration");
      history.push("/registersuccess");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-content page-auth" id="register">
        <div className="section-store-auth" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center justify-content-center row-login mt-5">
              <div className="col-lg-4">
                <h2>
                  Daftarkan email anda <br /> untuk memulai
                </h2>
                <form className="mt-3" onSubmit={submitHandler}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control is-valid"
                      name="name"
                      autoFocus
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control is-invalid"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password Confirm</label>
                    <input
                      type="password"
                      className="form-control"
                      name="passwordConfirm"
                      required
                      onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-success btn-block mt-4">
                    Sign Up Now
                  </button>
                  <Link to="/login" className="btn btn-signup btn-block mt-2">
                    Sign In
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

export default RegisterPage;
