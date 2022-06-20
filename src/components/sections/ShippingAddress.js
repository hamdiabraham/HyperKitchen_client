import React from "react";

const ShippingAddress = () => {
  return (
    <>
      <h4 className="mb-3" style={{ marginTop: "100px" }}>
        Your Address
      </h4>
      <form>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Alamat lengkap"
          />
        </div>
        <div className="form-group">
          <label>Address II</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Alamat tambahan"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <select className="custom-select">
            <option selected>Select City</option>
            <option value="1">Bandung</option>
            <option value="2">Jakarta</option>
            <option value="3">Surabaya</option>
          </select>
        </div>
        <div className="form-group">
          <label>Country</label>
          <select className="custom-select">
            <option selected>Select Country</option>
            <option value="1">Indonesia</option>
            <option value="2">Malaysia</option>
            <option value="3">SIngapura</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default ShippingAddress;
