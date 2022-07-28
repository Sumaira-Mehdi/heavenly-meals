import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "../main/completeProjectStyling.css";
import Header from "../../Partials/Header/Header";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import Maincourse from "./Maincourse";
let navigate;
const Menu = () => {
  navigate = useNavigate();
  const [cartTotal, setCartTotal] = useState(0);
  const [items, setItems] = useState(0);
  return (
    <>
      <Header items={items} />
      <section class="row banner">
        <section class="container">
          <div class="main">
            <h1>Menu</h1>
          </div>
        </section>
      </section>
      <section>
        <section class="menu-container">
          <div class="chillies-img">
            <img src="images/chillies.png" alt="chillies" />
          </div>
          <section class="inner-container">
            <div class="menu-heading">
              <div class="menu-heading-1">
                <img src="Images/amazing.png" alt="amazing" />
                <div class="menu-heading-2">DELICIOUS</div>
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
                  replace: true,
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
      </section>
    </>
  );


};
export default Menu;
