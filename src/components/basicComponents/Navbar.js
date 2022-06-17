import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const onLogout = () => {
    localStorage.removeItem("auth");
    dispatch(logout());
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light navbar-store fixed-top navbar-fixed-top"
        data-aos="fade-down"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/images/logo.svg" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link">
                  Categories
                </Link>
              </li>
              {!user && (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="btn btn-success nav-link px-4 text-white"
                  >
                    Sign In
                  </Link>
                </li>
              )}
            </ul>

            <ul className="navbar-nav d-none d-lg-flex">
              {user && (
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <img
                      src={`http://localhost:7000/upload/${user.image}`}
                      alt=""
                      className="rounded-circle mr-2 profile-picture"
                    />
                    Hi {user.name}
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/dashboard.html" className="dropdown-item">
                      Dashboard
                    </Link>
                    <Link
                      to="/dashboard-account.html"
                      className="dropdown-item"
                    >
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <a href="/" className="dropdown-item" onClick={onLogout}>
                      Logout
                    </a>
                  </div>
                </li>
              )}
              <li className="nav-item">
                <Link to="/cart" className="nav-link d-inline-block mt-2">
                  <img src="/images/icon-cart-empty.svg" alt="" />
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav d-block d-lg-none">
              {user && (
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                  >
                    Hi, {user.name}
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/dashboard.html" className="dropdown-item">
                      Dashboard
                    </Link>
                    <Link
                      to="/dashboard-account.html"
                      className="dropdown-item"
                    >
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to="/" className="dropdown-item" onClick={onLogout}>
                      Logout
                    </Link>
                  </div>
                </li>
              )}
              <li className="nav-item">
                <Link to="/cart" className="nav-link d-inline-block">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
