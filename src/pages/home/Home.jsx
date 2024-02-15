import "./Home.css";

import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ComOne from "../../components/comOne/ComOne";
import Best from "../../components/best/Best";

import { Link } from "react-router-dom";
import heroimg from "../../assets/heroimg.png";
import cal from "../../assets/cal.png";
import xal from "../../assets/xal.png";
import zal from "../../assets/zal.png";

const API = "http://localhost:3000/audiophile";
function Home() {
  const { data, isPending, error } = useFetch(API);

  console.log(data);
  return (
    <>
      {data && (
        <div className="hero ">
          <div className="f">
            <div className="container ">
              <div className="hero-container">
                <div className="hero-one">
                  <span className="new-p">NEW PRODUCT</span>
                  <h1 className="hero-title">{data[3].name}</h1>
                  <p className="hero-text">{data[3].description}</p>
                  <Link to="headphones1" className="hero-btn">
                    See Product
                  </Link>
                </div>
                <div className="hero-two">
                  <img src={heroimg} alt="" className="two-img" />
                </div>
              </div>
            </div>
          </div>
          <ComOne />
          <div className="db container">
            <div className="db-one">
              <img src={cal} alt="" className="db-img" />
              <div className="div">
                <h2 className="db-title">{data[5].name}</h2>
                <p className="db-text">{data[5].description}</p>
                <Link to="speakers1" className="db-links">
                  See Product
                </Link>
              </div>
            </div>
            <div className="db-two">
              <div className="g">
                <h2 className="two-title"> {data[4].name}</h2>
                <Link to="speakers2" className="r">
                  See Product
                </Link>
              </div>
              <img src={xal} alt="" className="dc" />
            </div>
            <div className="db-tre">
              <img src={zal} alt="" className="tre-img" />
              <div className="h">
                <h2 className="two-title"> {data[0].name}</h2>
                <Link to="earphones1" className="r">
                  See Product
                </Link>
              </div>
            </div>
          </div>
          <Best />
        </div>
      )}
    </>
  );
}

export default Home;
