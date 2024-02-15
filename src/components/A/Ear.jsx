import React from "react";
import "./A.css";
import { Link } from "react-router-dom";
import Co_3 from "../../assets/Co_3.png";
import n1 from "../../assets/n1.png";
import n2 from "../../assets/n2.png";
import n3 from "../../assets/n3.png";

import ComOne from "../comOne/ComOne";
import Best from "../best/Best";

import { useFetch } from "../../hooks/useFetch";
import { addItem } from "../../store/cartSlice";
import { useDispatch } from "react-redux";

const API = "http://localhost:3000/audiophile";

function Head1() {
  const { data, isPending, error } = useFetch(API);
  console.log(data);
  const dispatch = useDispatch();

  return (
    <>
      {data && (
        <div>
          <div className=" container go">
            <Link to="/earphone" className="tg">
              Go Back
            </Link>
          </div>
          <ul className="container">
            <li className="one-item">
              <div className="oo">
                <img src={Co_3} alt="" className="one-mg" />
              </div>
              <div className="on">
                {/* <span className="sd">NEW PRODUCT</span> */}
                <h1 className="on-title">{data[0].name}</h1>
                <p className="on-text">{data[0].description}</p>
                <span className="saa">${data[0].price}</span>
                <div className="op">
                  <button className="lit">1</button>
                  <button
                    onClick={() => dispatch(addItem(data[0]))}
                    className="on-link"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </li>
          </ul>
          {/* <Kerak /> */}
          <div className="kerak container">
            <div className="k-one">
              <h1 className="k-title">FEATURES</h1>
              <p className="k-text1">{data[0].features}</p>
            </div>
            <div className="k-two">
              <h2 className="k-title">IN THE BOX</h2>
              <ul className="k-list">
                {data[0].includes.map((include) => {
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
              <img src={n1} alt="" />
              <img src={n2} alt="" />
            </div>
            <img src={n3} alt="" />
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
