import React from "react";
import "./A.css";
import { Link } from "react-router-dom";
import a3 from "../../assets/a3.png";
import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import d3 from "../../assets/d3.png";

import ComOne from "../comOne/ComOne";
import Best from "../best/Best";
import Kerak from "../Kerak/Kerak";

import { useFetch } from "../../hooks/useFetch";

const API = "http://localhost:3000/audiophile";
import { useDispatch } from 'react-redux';
import { addItem } from "../../store/cartSlice"

function Head1() {
  const { data, isPending, error } = useFetch(API);
  console.log(data);
  const dispatch = useDispatch();

  return (
    <>
      {data && (
        <div>
          <div className=" container go">
            <Link to="/headphone" className="tg">
              Go Back
            </Link>
          </div>
          <ul className="container">
            <li className="one-item">
              <div className="oo">
                <img src={a3} alt="" className="one-mg" />
              </div>
              <div className="on">
                {/* <span className="sd">NEW PRODUCT</span> */}
                <h1 className="on-title">{data[1].name}</h1>
                <p className="on-text">{data[1].description}</p>
                <span className="saa">${data[1].price}</span>
                <div className="op">
                  <button className="lit">1</button>
                  <button onClick={() => dispatch(addItem(data[1]))} className="on-link">ADD TO CART</button>
                </div>
              </div>
            </li>
          </ul>
          <div className="kerak container">
            <div className="k-one">
              <h1 className="k-title">FEATURES</h1>
              <p className="k-text1">{data[1].features}</p>
            </div>
            <div className="k-two">
              <h2 className="k-title">IN THE BOX</h2>
              <ul className="k-list">
                {data[1].includes.map((include) => {
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
              <img src={d1} alt="" />
              <img src={d2} alt="" />
            </div>
            <img src={d3} alt="" />
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
