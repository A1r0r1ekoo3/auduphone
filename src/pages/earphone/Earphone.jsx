import React from "react";
import { Link } from "react-router-dom";
import Co_3 from "../../assets/Co_3.png";

import ComOne from "../../components/comOne/ComOne";
import Best from "../../components/best/Best";

import { useFetch } from "../../hooks/useFetch";

const API = "http://localhost:3000/audiophile";

function Speakers() {
  const { data, isPending, error } = useFetch(API);
  console.log(data);
  return (
    <>
      {data && (
        <div className="user ">
          <div className="us">
            <h1 className="title">SPEAKERS</h1>
          </div>
          <ul className="container">
            <li className="one-item">
              <div className="oo">
                <img src={Co_3} alt="" className="one-mg" />
              </div>
              <div className="on">
                <span className="sd">NEW PRODUCT</span>
                <h1 className="on-title">{data[0].name}</h1>
                <p className="on-text">{data[0].description}</p>
                <Link to="earphones1" className="on-link">
                  See Product
                </Link>
              </div>
            </li>
          </ul>
          <ComOne />
          <Best />
        </div>
      )}
    </>
  );
}

export default Speakers;
