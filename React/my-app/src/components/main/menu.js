import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './completeProjectStyling.css';
import Banner from "../partial/bnner";
import Drinks from "../partial/Drinks";
import Desserts from "../partial/Desserts";
import Maincourse from "../partial/Maincourse";
let navigate;
const Menu = () => {
  navigate = useNavigate();
  const [cartTotal, setCartTotal] = useState(0);
  const [items, setItems] = useState(0);
  return (
    <>
      <section className="row banner">
        <section className="container">
          <div className="main">
            <h1>Menu</h1>
          </div>
        </section>
      </section>
    
        <section className="menu-container">
          <div className="chillies-img">
            <img src="Images/chillies.png" alt="chillies" />
          </div>
          <section className="inner-container">
            <div className="menu-heading">
              <div className="menu-heading-1">
                <img src="Images/amazing.png" alt="amazing" />
                <div className="menu-heading-2">DELICIOUS</div>
              </div>
            </div>

            <Drinks
              amount="0"
              setCartTotal={setCartTotal}
              setItems={setItems}
            />
            <Maincourse
              amount="0"
              setCartTotal={setCartTotal}
              setItems={setItems}
            />
            <Desserts
              amount="0"
              setCartTotal={setCartTotal}
              setItems={setItems}
            />
            <div className="checkout">
              Total = ${cartTotal} <span className="fig"></span>
            </div>

            <div
              onClick={() => {
                navigate("/order", {
                  state: {
                    cartTotal: cartTotal,
                  },
                });
              }}
              className=" checkout net"
            >
              <a href = ""  style={{color: "white",textDecoration: "none"}}>CheckOut</a>
            </div>
          </section>
        </section>
    
    </>
  );


};
export default Menu;
