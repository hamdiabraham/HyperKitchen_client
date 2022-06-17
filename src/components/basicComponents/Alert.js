import React from "react";

const Alert = ({ alert, children }) => {
  return (
    <div className={`alert alert-${alert}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
