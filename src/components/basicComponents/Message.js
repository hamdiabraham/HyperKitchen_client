import React from "react";

const Message = ({ alert, children }) => {
  return (
    <div class={`alert alert-${alert}`} role="alert">
      {children}
    </div>
  );
};

export default Message;
