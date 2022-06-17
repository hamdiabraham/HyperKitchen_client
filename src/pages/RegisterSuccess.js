import React from "react";
import Footer from "../components/basicComponents/Footer";
import Navbar from "../components/basicComponents/Navbar";

const RegisterSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="page-content page-success">
        <div className="section-success" data-aos="zoom-in">
          <div className="container">
            <div className="row align-items-center row-login justify-content-center">
              <div className="col-lg-6 text-center">
                <img src="/images/success.svg" alt="" className="mb-4" />
                <h2>Welcome to Store</h2>
                <p>
                  Kamu sudah berhasil terdaftar <br /> bersama kami. Let’s grow
                  up now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterSuccess;
