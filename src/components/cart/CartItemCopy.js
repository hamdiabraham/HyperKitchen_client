import React from "react";

const CartItem = ({ name, price, image }) => {
  return (
    <tr>
      <td style={{ width: "25%" }}>
        <img src={image} alt="" className="cart-image" />
      </td>
      <td style={{ width: "35%" }}>
        <div className="product-title">{name}</div>
        <div className="product-subtitle">by Andi Sukka</div>
      </td>
      <td style={{ width: "35%" }}>
        <div className="product-title">{price}</div>
        <div className="product-subtitle">USD</div>
      </td>
      <td>
        <div class="row">
          <button
            type="submit"
            class="btn btn-sm"
            style={{ backgroundColor: "#eaeaef", color: "white" }}
          >
            <i class="fas fa-minus-circle"></i>
          </button>
          <span class="mx-2">25</span>
          <button
            type="submit"
            class="btn btn-sm btn-success"
            style={{ color: "white" }}
          >
            <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      </td>
      <td style={{ width: "20%" }}>
        <button to="#" className="btn btn-remove-cart">
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
