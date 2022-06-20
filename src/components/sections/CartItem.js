import React from "react";
import NumberFormat from "react-number-format";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cartActions";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  // const { items } = cart;

  const { name, qty, image, price } = props.items;

  return (
    <>
      <div className="row mb-3">
        <div className="col-2">
          <img
            src={`http://localhost:7000/upload/${image}`}
            alt=""
            style={{ borderRadius: "8px", maxHeight: "85px" }}
          />
        </div>
        <div className="col-4">
          <h5 className="m-0">{name}</h5>
          <p className="m-0" style={{ color: "#b7b7b7" }}>
            <NumberFormat
              value={price}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </p>
        </div>
        <div className="col-4 ml-auto">
          <button
            type="submit"
            className="btn btn-sm"
            style={{ backgroundColor: "#eaeaef", color: "white" }}
            onClick={dispatch(removeItem(cart))}
          >
            -
          </button>
          <span className="mx-3">{qty}</span>
          <button
            type="submit"
            className="btn btn-sm btn-success"
            style={{ color: "white" }}
            onClick={dispatch(addItem(cart))}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
