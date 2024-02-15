import React from "react";
import { useState } from "react";
import "./Summary.css";
import a1 from "../../assets/a1.png";
import ptichka from "../../assets/ptichka.png";
import { Link } from "react-router-dom";

function Summary() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className="sum-bg">
      <div className="sum-box">
        <ul className="">
          <li className="card mb-24">
            <img className="img" src={a1} alt="" width={64} />
            <div className="sum-card">
              <p className="card-title">XX99 MK II</p>
              <h5 className="card-title2">$ 2,999</h5>
            </div>
            <span className="card-title2">1x</span>
          </li>
          <li className="card mb-24">
            <img className="img" src={a1} alt="" width={64} />
            <div className="sum-card">
              <p className="card-title">XX99 MK II</p>
              <h5 className="card-title2">$ 2,999</h5>
            </div>
            <span className="card-title2">1x</span>
          </li>
          <li className="card mb-24">
            <img className="img" src={a1} alt="" width={64} />
            <div className="sum-card">
              <p className="card-title">XX99 MK II</p>
              <h5 className="card-title2">$ 2,999</h5>
            </div>
            <span className="card-title2">1x</span>
          </li>
        </ul>
        <ul className="gap-8">
          <li className="card">
            <h3 className="card-title2">TOTAL</h3>
            <span className="card-title">$ 5,396</span>
          </li>
          <li className="card">
            <h3 className="card-title2">SHIPPING</h3>
            <span className="card-title">$ 50</span>
          </li>
          <li className="card">
            <h3 className="card-title2">VAT (INCLUDED)</h3>
            <span className="card-title">$ 1,079</span>
          </li>
          <li className="card">
            <h3 className="card-title2">GRAND TOTAL</h3>
            <span className="card-title">$ 5,446</span>
          </li>
        </ul>
        <button onClick={toggleModal} className="btn">
          CONTINUE & PAY
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div className="overlay ">
            <div className="modal-content modal-box">
              <div>
                <div>
                  <img src={ptichka} alt="" width={64} />
                  <h1 className="pitichka">THANK YOU FOR YOUR ORDER</h1>
                  <p className="modal-text ">
                    You will receive an email confirmation shortly.
                  </p>
                </div>
                <div className="card2">
                  <ul className="ul-modal">
                    <li className="card mb-24">
                      <img className="img mr-27" src={a1} alt="" width={64} />
                      <div className="sum-card mr-42">
                        <p className="card-title ">XX99 MK II</p>
                        <h5 className="card-title2">$ 2,999</h5>
                      </div>
                      <span className="card-title2">1x</span>
                    </li>
                    <li className="card mb-24">
                      <img className="img" src={a1} alt="" width={64} />
                      <div className="sum-card">
                        <p className="card-title">XX99 MK II</p>
                        <h5 className="card-title2">$ 2,999</h5>
                      </div>
                      <span className="card-title2">1x</span>
                    </li>
                    <li className="view">
                      <h3 className="pad-8">View less</h3>
                    </li>
                  </ul>
                  <div className="modal-div">
                    <span className="modal-text2">GRAND TOTAL</span>
                    <h3 className="modal-text2">$ 5,446</h3>
                  </div>
                </div>
                <Link className="btn" to="/">BACK TO HOME</Link>
              </div>
              ;
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Summary;
