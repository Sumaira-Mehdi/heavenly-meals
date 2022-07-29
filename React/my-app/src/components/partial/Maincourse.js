import axios from "axios";

import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import "../main/completeProjectStyling.css";



const Maincourse = ({ setCartTotal, setItems }) => {
  const [products, getProduct] = useState();
  const [total, setTotal] = useState(0);
  const getProductData = () => {
    axios
      .get("/api/menu", {
        params: {
          category: "Maincourse",
        },
      })
      .then(function (response) {
        //console.log(response.data);
        // handle success
        getProduct(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    //console.log("hello syeda");
    getProductData();
  }, []);

 

  return (
    <>
      <div className="main-course">
        <img
          className="main-course-img"
          src="images/main-course.png"
          alt="maincourse"
        />
        <div className="main-course-menu">
          <div className="main-course-items">
            <p>Main course</p>
            <ul>
              {products &&
                products.map((data, key) => {
                  return (
                      <li key={key}>
                        <img src="images/drinks-menu.png" alt="maincourse" />
                        {data.menu}
                        ........................................${data.price}
                        <Counter
                          total={total}
                          setTotal={setTotal}
                          setCartTotal={setCartTotal}
                          setItems={setItems}
                          price={data.price}
                          key={key}
                        />
                      </li>
                  );
                })}
            </ul>
            <div className="total">Subtotal = ${total}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Maincourse;
