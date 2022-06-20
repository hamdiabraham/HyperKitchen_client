import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/sections/CartItem";
import { useSelector } from "react-redux";
import ShippingAddress from "../components/sections/ShippingAddress";
import PaymentInformation from "../components/sections/PaymentInformation";
import NumberFormat from "react-number-format";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  return (
    <>
      <div className="container cart-header">
        <div className="row mt-5 text-center">
          <div className="col">
            <h3>Keranjang Anda</h3>
            <p>Pastikan barang anda terbayar lunas</p>
          </div>
        </div>
      </div>

      <div className="container mt-5" data-aos="fade-down">
        <nav>
          <ol className="breadcrumb bg-transparent pl-0 cart-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Keranjang Belanja
            </li>
          </ol>
        </nav>
      </div>

      <section className="checkout">
        <div className="container">
          <div
            className="row justify-content-between"
            style={{ marginBottom: "100px" }}
          >
            <div className="col-lg-6">
              <h4 className="mb-4">Your Items</h4>

              {/* {cart.map((cartItem, index) => {
                return (
                  <CartItem
                    key={index}
                    name={cartItem.name}
                    price={cartItem.price}
                    image={`http://localhost:7000/upload/${cartItem.image}`}
                    qty={cartItem.qty}
                  />
                );
              })} */}

              {cart.map((cartItem) => {
                return (
                  <CartItem
                    key={cartItem._id}
                    items={{
                      name: cartItem.name,
                      price: cartItem.price,
                      image: cartItem.image,
                      qty: cartItem.qty,
                    }}
                  />
                );
              })}

              <ShippingAddress />
            </div>

            <div className="col-lg-5">
              <div className="card rounded-0 checkout-detail">
                <div className="card-body">
                  <h5 className="card-title">Payment Information</h5>
                  {cart.map((cartItem, index) => {
                    return (
                      <PaymentInformation
                        key={index}
                        name={cartItem.name}
                        price={cartItem.price * cartItem.qty}
                        qty={cartItem.qty}
                      />
                    );
                  })}

                  <hr />

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Total Item</h6>
                      <small style={{ color: "#b7b7b7" }}>3 Items</small>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <h6 className="m-0">Total Harga</h6>
                    </div>
                    <div className="col d-flex justify-content-end">
                      <h6 className="m-0 align-self-center text-success">
                        <NumberFormat
                          value={total}
                          prefix="Rp. "
                          displayType="text"
                          thousandSeparator="."
                          decimalSeparator=","
                        />
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-block"
                    style={{ backgroundColor: "#eaeaef", color: "#adadad" }}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-block btn-warning text-white"
                    data-toggle="modal"
                    data-target="#checkoutModal"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
