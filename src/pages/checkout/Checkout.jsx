import React from "react";

import { Link } from "react-router-dom";
import "./Checkout.css";
import Summary from "../../components/summary/Summary";

function Checkout() {
 
  return (
    <div className="check-bg">
      <Link to="/" className="link">Go Back</Link>
      <div className="check-box">
        <div className="checkout">
          <form className="check-form">
            <div>
              <h1 className="check-title">CHECKOUT</h1>
            </div>
            <div className="billing">
              <h4 className="billing-title">Billing Details</h4>
              <div className="label-box">
                <label className="check-label">
                  <span className="check-span">Name</span>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    className="check-input"
                  />
                </label>
                <label className="check-label">
                  <span className="check-span">Email Address</span>
                  <input
                    type="text"
                    placeholder="alexei@mail.com"
                    className="check-input"
                  />
                </label>
              </div>
              <label className="check-label">
                <span className="check-span">Phone Number</span>
                <input
                  type="text"
                  placeholder="+1 202-555-0136"
                  className="check-input m-53"
                />
              </label>
            </div>
            <div>
              <div>
                <h1 className="billing-title">shipping info</h1>
              </div>
              <div>
                <label className="check-label">
                  <span className="check-span">Address</span>
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className="check-input w100"
                  />
                </label>
                <div className="label-box m-24">
                  <label className="check-label">
                    <span className="check-span">ZIP Code</span>
                    <input
                      type="text"
                      placeholder="10001"
                      className="check-input"
                    />
                  </label>
                  <label className="check-label">
                    <span className="check-span">City</span>
                    <input
                      type="text"
                      placeholder="New York"
                      className="check-input"
                    />
                  </label>
                </div>
                <label className="check-label">
                  <span className="check-span">Country</span>
                  <input
                    type="text"
                    placeholder="United States"
                    className="check-input m-53"
                  />
                </label>
              </div>
            </div>
            <div>
              <form className="label-box">
                <h1 className="billing-title">payment details</h1>
                <div className="billing gap">
                  <label className="check-label2">
                    <input type="checkbox" checked="checked" className="" />
                    <span className="check-span">e-Money</span>
                  </label>
                  <label className="check-label2">
                    <input
                      type="checkbox"
                      checked="checked"
                      className="checkend"
                    />
                    <span className="check-span">Cash on Delivery</span>
                  </label>
                </div>
              </form>
              <div className="label-box">
                <label className="check-label">
                  <span className="check-span">e-Money Number</span>
                  <input
                    type="text"
                    placeholder="238521993"
                    className="check-input"
                  />
                </label>
                <label className="check-label">
                  <span className="check-span">e-Money PIN</span>
                  <input
                    type="text"
                    placeholder="6891"
                    className="check-input"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
        <Summary />
      </div>
    </div>
  );
}

export default Checkout;
