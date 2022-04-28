import React from "react";

import "./style.scss";
function MyButton({ children, href, className, style, btn, onClick }) {
  return (
    <a
      style={style}
      href={href}
      className={`btn-basic ${btn ? btn : "my-btn"} ${className}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default MyButton;
