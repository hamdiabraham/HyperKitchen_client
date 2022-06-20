import React from "react";
import NumberFormat from "react-number-format";

const PaymentInformation = ({ name, price, qty }) => {
  return (
    <div className="row mb-3">
      <div className="col">
        <h6 className="m-0">{name}</h6>
        <small style={{ color: "#b7b7b7" }}>{qty} Item</small>
      </div>
      <div className="col d-flex justify-content-end">
        <h6 className="m-0 align-self-center text-success">
          <NumberFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
        </h6>
      </div>
    </div>
  );
};

export default PaymentInformation;
