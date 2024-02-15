import "./Header.css";
import logo from "../../assets/logo.svg";
import Shape from "../../assets/Shape.svg";
import Group1 from "../../assets/Group1.png";
import Com1 from "../../assets/mo.png";
import Com2 from "../../assets/moo.png";
import Com3 from "../../assets/modal3.png";

import { useState } from "react";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const totalCart = useSelector((state) => state.cartState.cartTotal);
  const cartItems = useSelector((state) => state.cartState.cartItems);
  const totalPrice = useSelector((state) => state.cartState.shipping);

  return (
    <header className="header">
      <div className="container">
        <div className="header__container container">
          {/* <Link className="" to="#" ></Link> */}
          <Link className="site-logo" to="/">
            <img
              src={Group1}
              alt="Site logo"
              className="site-g"
              width="16"
              height="15"
            />
            <img
              src={logo}
              alt="Site logo"
              className="site-logo__img"
              width="143"
              height="25"
            />
          </Link>
          <nav className="sitenav">
            <ul className="sitenav-list">
              <li className="sitenav-item">
                <NavLink className="sitenav-link" to="/">
                  {" "}
                  Home
                </NavLink>
              </li>
              <li className="sitenav-item">
                <NavLink className="sitenav-link" to="/headphone">
                  Headphone
                </NavLink>
              </li>
              <li className="sitenav-item">
                <NavLink className="sitenav-link" to="/speakers">
                  {" "}
                  Speakers
                </NavLink>
              </li>
              <li className="sitenav-item">
                <NavLink className="sitenav-link" to="/earphone">
                  Earphone
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="log-sheap">
            <h1 className="welcome">Hello Abrorbek</h1>
            <NavLink to="/signup" className="logout">
              Logout
            </NavLink>
            <button onClick={toggleModal} className="header-btn">
              <img
                className="header-btn__img"
                src={Shape}
                alt=""
                width="23"
                height="20"
              />
              <span className="header-btn__span">{totalCart}</span>
            </button>
          </div>
        </div>
        <hr className="hr" />
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay">
              <div className="modal-content">
                <div className="desc">
                  <div className="modal-one">
                    <h2>Cart ({totalCart})</h2>
                    <p>Remove all</p>
                  </div>
                  {cartItems.length ? (
                    <ul className="list">
                      {cartItems.map((cart) => (
                        <li className="item">
                          {/* <img src={cart.image.mobile} alt={cart.name} /> */}
                          <span>
                            <h2>{cart.name}</h2>
                            <p>$ {cart.price}</p>
                          </span>
                          <button className="btna">
                            <span className="usa1">-</span>
                            <span className="usa">1</span>
                            <span className="usa2">+</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p></p>
                  )}
                  {/* <ul className="list">
                    <li className="item">
                      <img src={Com1} alt="" />
                      <span>
                        <h2>XX99 MK II</h2>
                        <p>$ 2,999</p>
                      </span>
                      <button className="btna">
                        <span className="usa1">-</span>
                        <span className="usa">1</span>
                        <span className="usa2">+</span>
                      </button>
                    </li>
                    <li className="item">
                      <img src={Com2} alt="" />
                      <span>
                        <h2>XX99 MK II</h2>
                        <p>$ 2,999</p>
                      </span>
                      <button className="btna">
                        <span className="usa1">-</span>
                        <span className="usa">1</span>
                        <span className="usa2">+</span>
                      </button>
                    </li>
                    <li className="item">
                      <img src={Com3} alt="" />
                      <span>
                        <h2>XX99 MK II</h2>
                        <p>$ 2,999</p>
                      </span>
                      <button className="btna">
                        <span className="usa1">-</span>
                        <span className="usa">1</span>
                        <span className="usa2">+</span>
                      </button>
                    </li>
                  </ul> */}
                  <div className="total">
                    <h3>Total</h3>
                    <p>$ {totalPrice}</p>
                  </div>
                  <Link to="/Checkout" className="check">
                    Checkout 😊
                  </Link>
                  <button onClick={toggleModal} className="cobac">
                    {" "}
                    Go Back 😒
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
// <nav>
//     <NavLink to='/'>Home</NavLink>
//     <NavLink to='/speakers'>Speakers</NavLink>
//     <NavLink to='/headphone'>Headphone</NavLink>
//     <NavLink to='/earphone'>Earphone</NavLink>
// </nav>
