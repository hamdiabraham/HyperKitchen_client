import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

const CardProduct = ({ name, price, image, id }) => {
  return (
    <div
      className="col-6 col-md-4 col-lg-3"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <Link to={`/detail/${id}`} className="component-products d-block">
        <div className="products-thumbnail">
          <div
            className="products-image"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>
        </div>
        <div className="products-text">{name}</div>
        <div className="products-price">
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
