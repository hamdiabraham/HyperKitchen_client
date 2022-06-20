import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../basicComponents/Navbar";
import Footer from "../basicComponents/Footer";
import CartItem from "./CartItemCopy";

const CartCopy = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      <section
        className="store-breadcrumbs"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Cart</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="store-cart">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-12 table-responsive">
              <table className="table table-borderless table-cart">
                <thead>
                  <tr>
                    <td>Image</td>
                    <td>Name &amp; Seller</td>
                    <td>Price</td>
                    <td>Menu</td>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cartItem, index) => {
                    return (
                      <CartItem
                        key={index}
                        name={cartItem.name}
                        price={cartItem.price}
                        image={`http://localhost:7000/upload/${cartItem.image}`}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="150">
            <div className="col-12">
              <hr />
            </div>
            <div className="col-12">
              <h2 className="mb-4">Shipping Details</h2>
            </div>
          </div>
          <div className="row mb-2" data-aos="fade-up" data-aos-delay="200">
            <div className="col-md-6">
              <div className="form-group">
                <label>Address 1</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressOne"
                  name="addressOne"
                  placeholder="Setra Duta Cemara"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Address 2</label>
                <input
                  type="text"
                  className="form-control"
                  id="addressTwo"
                  name="addressTwo"
                  placeholder="Blok B2 No. 34"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Province</label>
                <select name="province" id="province" className="form-control">
                  <option value="West Java">West Java</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>City</label>
                <select name="city" id="city" className="form-control">
                  <option value="Bandung">Bandung</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="postalCode"
                  name="postalCode"
                  placeholder="123999"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  placeholder="Indonesia"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="+628 2020 11111"
                />
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="150">
            <div className="col-12">
              <h2>Payment Informations</h2>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="200">
            <div className="col-4 col-md-2">
              <div className="product-title">$10</div>
              <div className="product-subtitle">Country Tax</div>
            </div>
            <div className="col-4 col-md-3">
              <div className="product-title">$280</div>
              <div className="product-subtitle">Product Insurance</div>
            </div>
            <div className="col-4 col-md-2">
              <div className="product-title">$580</div>
              <div className="product-subtitle">Ship to Jakarta</div>
            </div>
            <div className="col-4 col-md-2">
              <div className="product-title text-success">$392,409</div>
              <div className="product-subtitle">Total</div>
            </div>
            <div className="col-8 col-md-3">
              <a
                href="/success.html"
                className="btn btn-success mt-4 px-4 btn-block"
              >
                Checkout Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartCopy;
