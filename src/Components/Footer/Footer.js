import React from "react";
import "./Footer.css";
import derailLogo from "../../assets/derail.png";

const footer = () => {
  return (
    <div className="Footer">
      <img src={derailLogo} />
    </div>
  );
};

export default footer;
