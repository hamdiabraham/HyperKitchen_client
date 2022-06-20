import React, { useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../redux/products/productAction";
import Footer from "../components/basicComponents/Footer";
import Navbar from "../components/basicComponents/Navbar";
import NumberFormat from "react-number-format";
import { addItem } from "../redux/cart/cartActions";

const DetailPage = () => {
  const productId = useParams().id;
  const dispatch = useDispatch();
  const history = useHistory();

  const productDetail = useSelector((state) => state.productDetail);
  const { product } = productDetail;

  useEffect(() => {
    dispatch(productDetails(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    dispatch(addItem(product));
    history.push("/cart");
  };

  return (
    <>
      <Navbar />
      <div className="page-content page-details">
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
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Product Details</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>

        <section className="store-gallery" id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" data-aos="zoom-in">
                <img
                  src={`http://localhost:7000/upload/${product.image}`}
                  className="w-100 main-image"
                  alt=""
                />
              </div>
              <div className="col-lg-2">
                <div className="row">
                  <div
                    className="col-lg-12 mt-2 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                  >
                    <button
                      type="submit"
                      className="btn btn-success px-4 text-white btn-block mb-3"
                      onClick={addToCartHandler}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="store-details-container mt-2" data-aos="fade-up">
          <section className="store-heading">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h1>{product.name}</h1>
                  <div className="owner">By Dwi Muslimah</div>
                  <div className="price">
                    <NumberFormat
                      value={product.price}
                      prefix="Rp. "
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="store-description">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="store-review">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 mt-3 mb-3">
                  <h5>Customer Review (3)</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="media">
                    <img
                      className="align-self-start mr-3"
                      src="/images/icon-testimonial-1.png"
                      alt="product"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Hazza Rizky</h5>I thought it was not
                      good for living room. I really happy to decided buy this
                      product last week now feels like homey.
                    </div>
                  </div>
                  <div className="media">
                    <img
                      className="align-self-start mr-3"
                      src="/images/icon-testimonial-2.png"
                      alt="product"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Anna Sukkirata</h5>
                      Color is great with the minimalist concept. Even I thought
                      it was made by Cactus industry. I do really satisfied with
                      this.
                    </div>
                  </div>
                  <div className="media">
                    <img
                      className="align-self-start mr-3"
                      src="/images/icon-testimonial-3.png"
                      alt="product"
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Dakimu Wangi</h5>
                      When I saw at first, it was really awesome to have with.
                      Just let me know if there is another upcoming product like
                      this.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
