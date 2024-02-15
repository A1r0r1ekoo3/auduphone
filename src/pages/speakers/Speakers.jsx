import "./Speakers.css";
import React from "react";
import { Link } from "react-router-dom";
import q1 from "../../assets/q1.png";
import q2 from "../../assets/q2.png";
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
            <img src={q1} alt="" className="one-mg" />
          </div>
          <div className="on">
            <span className="sd">NEW PRODUCT</span>
            <h1 className="on-title">
            {data[5].name}<br /> SPEAKER
            </h1>
            <p className="on-text">
            {data[5].description}
            </p>
            <Link to="speakers1" className="on-link">
              See Product
            </Link>
          </div>
        </li>
        <li className="one-item">
          <div className="on">
            <h1 className="on-title">
            {data[4].name} <br />
              SPEAKER
            </h1>
            <p className="on-text">
            {data[4].description}
            </p>
            <Link to="speakers2" className="on-link">
              See Product
            </Link>
          </div>
          <div className="oo">
            <img src={q2} alt="" className="one-mg" />
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
