import React from "react";
import "./A.css";
import { Link } from "react-router-dom";
import q2 from "../../assets/q2.png";
import q5 from "../../assets/q5.png";
import q4 from "../../assets/q4.png";
import q6 from "../../assets/q6.png";

import ComOne from "../comOne/ComOne";
import Best from "../best/Best";
import Kerak from "../Kerak/Kerak";

import { useFetch } from "../../hooks/useFetch";

const API = "http://localhost:3000/audiophile";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

function Head1() {
  const { data, isPending, error } = useFetch(API);
  console.log(data);
  const dispatch = useDispatch();

  return (
    <>
      {data && (
        <div>
          <div className=" container go">
            <Link to="/speakers" className="tg">
              Go Back
            </Link>
          </div>
          <ul className="container">
            <li className="one-item">
              <div className="oo">
                <img src={q2} alt="" className="one-mg" />
              </div>
              <div className="on">
                {/* <span className="sd">NEW PRODUCT</span> */}
                <h1 className="on-title">{data[4].name}</h1>
                <p className="on-text">{data[4].description}</p>
                <span className="saa">${data[4].price}</span>
                <div className="op">
                  <button className="lit">1</button>
                  <button
                    onClick={() => dispatch(addItem(data[4]))}
                    className="on-link"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <div className="kerak container">
            <div className="k-one">
              <h1 className="k-title">FEATURES</h1>
              <p className="k-text1">{data[4].features}</p>
            </div>
            <div className="k-two">
              <h2 className="k-title">IN THE BOX</h2>
              <ul className="k-list">
                {data[4].includes.map((include) => {
                  return (
                    <li key={include.item} className="k-item">
                      <span className="k-s">{include.quantity}x</span>{" "}
                      <p className="k-text">{include.item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="gh container">
            <div className="ty">
              <img src={q4} alt="" />
              <img src={q5} alt="" />
            </div>
            <img src={q6} alt="" />
          </div>
          <div className="container">
            <h1 className="titles">YOU MAY ALSO LIKE</h1>
          </div>
          <ComOne />
          <Best />
        </div>
      )}
    </>
  );
}

export default Head1;
