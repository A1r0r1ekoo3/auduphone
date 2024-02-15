import { Link } from "react-router-dom";
import "./ComOne.css";

import Com1 from "../../assets/Co_1.png";
import Com2 from "../../assets/Co_2.png";
import Com3 from "../../assets/Co_3.png";

import React from "react";

function ComOne() {
  return (
    <div className="com ">
      <div className="container">
        <ul className="com-list">
          <li className="com-item">
            <img src={Com1} alt="" className="com-img img1" />
            <h2 className="com-title">HEADPHONES</h2>
            <Link className="com-link">Shop</Link>
          </li>
          <li className="com-item">
            <img src={Com2} alt="" className="com-img img2" />
            <h2 className="com-title">SPEAKERS</h2>
            <Link className="com-link">Shop</Link>
          </li>
          <li className="com-item">
            <img src={Com3} alt="" className="com-img img3" />
            <h2 className="com-title">EARPHONES</h2>
            <Link className="com-link">Shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ComOne;
