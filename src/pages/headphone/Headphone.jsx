import "./Headphone.css";
import React from "react";
import "./Headphone.css";
import Best from "../../components/best/Best";
import ComOne from "../../components/comOne/ComOne";
import { Link } from "react-router-dom";
import a1 from "../../assets/a1.png";
import a2 from "../../assets/a2.png";
import a3 from "../../assets/a3.png";

import { useFetch } from "../../hooks/useFetch";

const API = "http://localhost:3000/audiophile";

function Headphone() {
  const { data, isPending, error } = useFetch(API);
  console.log(data);
  return (
    <>
      {data && (
        <div className="user ">
          <div className="us">
            <h1 className="title">HEADPHONES</h1>
          </div>
          <ul className="container">
            <li className="one-item">
              <img src={a1} alt="" className="one-mg" />
              <div className="on">
                <span className="sd">NEW PRODUCT</span>
                <h1 className="on-title">{data[3].name}</h1>
                <p className="on-text">{data[3].description}</p>
                <Link to="headphones1" className="on-link">
                  See Product
                </Link>
              </div>
            </li>
            <li className="one-item">
              <div className="on">
                <h1 className="on-title">
                  {data[2].name} <br />
                  Headphones
                </h1>
                <p className="on-text">{data[2].description}</p>
                <Link to="headphones2" className="on-link">
                  See Product
                </Link>
              </div>
              <div className="oo">
                <img src={a2} alt="" className="one-mg" />
              </div>
            </li>
            <li className="one-item a">
              <div className="oo">
                <img src={a3} alt="" className="one-mg" />
              </div>
              <div className="on">
                <h1 className="on-title">
                  {data[1].name} <br />
                  Headphones
                </h1>
                <p className="on-text">{data[1].description}</p>
                <Link to="headphones3" className="on-link">
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

export default Headphone;
