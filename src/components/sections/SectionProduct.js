import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/products/productAction";
import PuffLoader from "react-spinners/PuffLoader";
import CardProduct from "../basicComponents/CardProduct";

const SectionProduct = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const { products, status } = productList;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="store-new-products">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h5>New Products</h5>
          </div>
        </div>
        <div className="row">
          {status === "process" && !products.length ? (
            <div className="m-auto">
              <PuffLoader color="#ff7158" />
            </div>
          ) : null}
          {products.map((prod) => {
            return (
              <CardProduct
                id={prod._id}
                key={prod._id}
                image={`http://localhost:7000/upload/${prod.image}`}
                name={prod.name}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionProduct;
